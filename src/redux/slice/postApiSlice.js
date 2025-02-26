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
        body: benchID,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetBenchLocationsMutation, useGetCourtNosMutation } = postApiSlice;

export default postApiSlice;
