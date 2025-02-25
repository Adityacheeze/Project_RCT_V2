import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://164.52.201.69/rct_application/public/api/v1",
  }),
  endpoints: (builder) => ({
    getVisitors: builder.query({
      query: () => "getVisitor",
    }),
    getLastUpdate: builder.query({
      query: () => "getlastupdate",
    }),
  }),
});

export const {useGetVisitorsQuery, useGetLastUpdateQuery} = apiSlice;
export default apiSlice;