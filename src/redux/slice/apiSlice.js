import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_GET_URL,
  }),
  endpoints: (builder) => ({
    getVisitors: builder.query({
      query: () => "getVisitor",
    }),
    getLastUpdate: builder.query({
      query: () => "getlastupdate",
    }),
    getGallery: builder.query({
      query: () => "get-gallery/7",
    }),
    getFooters: builder.query({
      query: () => "get-footers/7",
    }),
    getBanners: builder.query({
      query: () => "get-banners/7",
    }),
    getWhatsNew: builder.query({
      query: () => "get-news/7/whatsnew",
    }),
    getAllTenders: builder.query({
      query: () => "getAllTenders/7/1",
    }),
  }),
});

export const {
  useGetVisitorsQuery,
  useGetLastUpdateQuery,
  useGetGalleryQuery,
  useGetFootersQuery,
  useGetBannersQuery,
  useGetWhatsNewQuery,
  useGetAllTendersQuery,
} = apiSlice;
export default apiSlice;
