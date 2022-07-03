import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ENV, TokenStorage } from '@/shared';

const baseUrl = ENV.endpointUrl;

export const BaseQuery = createApi({
  reducerPath: baseUrl,
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = TokenStorage.getToken();

      if (token) headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),
});
