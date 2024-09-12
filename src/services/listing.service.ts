import { apiSclice } from "./base-query";

export const listingApi = apiSclice.injectEndpoints({
  endpoints: (builder) => ({
    getAllListing: builder.query({
      query: () => ({
        url: "/listing",
        method: "GET",
      }),
    }),
    getDetailListing: builder.query({
      query: (slug: string) => ({
        url: `/listing/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllListingQuery, useGetDetailListingQuery } = listingApi;
