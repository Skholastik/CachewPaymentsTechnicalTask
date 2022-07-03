import { ILoginParams } from '@/features/Auth';
import { BaseQuery } from '@/shared';

const AuthQuery = BaseQuery.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<string, ILoginParams>({
      query: (credentials) => ({
        url: 'api/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: { token: string }) => response.token,
    }),
  }),
});

export const { useLoginMutation } = AuthQuery;
