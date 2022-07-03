import React from 'react';

import { useGetCurrentUserQuery, IUser } from '@/features/User';
import { useHandleError } from '@/shared';

import { HeaderAvatar } from './styled';

export const GetUserDisplayName = (user: IUser): string =>
  user.first_name && user.last_name ? `${user.first_name}  ${user.last_name}` : user.email;

export const CurrentUserAvatar = () => {
  const { data: user = {} as IUser, error } = useGetCurrentUserQuery();
  useHandleError(error);

  return (
    <>
      <HeaderAvatar alt={`${GetUserDisplayName(user)}`} src={user.avatar} />
      {`${GetUserDisplayName(user)}`}
    </>
  );
};
