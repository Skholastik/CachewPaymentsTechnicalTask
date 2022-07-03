import { IUser } from '@/features/User';
import { BaseQuery, ENV } from '@/shared';

const UserQuery = BaseQuery.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<IUser, void>({
      query: () => ({
        url: `api/users/${ENV.mockUserId}`,
      }),
      transformResponse: (response: { data: IUser }) => response.data,
    }),
  }),
});

export const { useGetCurrentUserQuery } = UserQuery;
