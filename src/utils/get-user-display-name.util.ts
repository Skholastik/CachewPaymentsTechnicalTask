import { User } from '../models/user.model';

export const GetUserDisplayName = (user: User): string => {
  return user.first_name && user.last_name
    ? `${user.first_name}  ${user.last_name}`
    : user.email;
};
