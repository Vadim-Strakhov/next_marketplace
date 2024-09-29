import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.API_KEY;

const API_URL = "https://fortniteapi.io/v2/shop?lang=ru";

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `${API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetItemsQuery } = shopApi;
