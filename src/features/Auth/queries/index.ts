import { ILoginParams } from '@/features/Auth';
import { BaseQuery, TokenStorage } from '@/shared';

const AuthQuery = BaseQuery.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<string, ILoginParams>({
      query: (credentials) => ({
        url: 'api/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: { token: string }) => response.token,
      onCacheEntryAdded: (_, { getCacheEntry }) => {
        const token = getCacheEntry().data;
        if (!token) return;

        TokenStorage.setToken(token);
      },
    }),
  }),
});

export const { useLoginMutation } = AuthQuery;
