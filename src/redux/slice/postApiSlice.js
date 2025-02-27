import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApiSlice = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_POST_URL,
  }),
  endpoints: (builder) => ({
    getBenchLocations: builder.mutation({
      query: () => ({
        url: "getBenchLocations",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getCourtNos: builder.mutation({
      query: (benchID) => ({
        url: "getCourtNos",
        method: "POST",
        body: { bench_location: benchID },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    submitFormData: builder.mutation({
      query: (formData) => ({
        url: "public_causelist",
        method: "POST",
        body: {
          bench_id: formData.RCTbenchID,
          court_no: formData.courtNum,
          listing_date: formData.date,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetBenchLocationsMutation,
  useGetCourtNosMutation,
  useSubmitFormDataMutation,
} = postApiSlice;

export default postApiSlice;
