import { ErrorResponse } from '../models/error-response.model';
import { User } from '../models/user.model';
import { ClientApi } from './client-api.service';

const getUser = (userId: number): Promise<User | ErrorResponse> => {
  return ClientApi.get(`api/users/${userId}`);
};

export const UserApi = {
  getUser,
};
