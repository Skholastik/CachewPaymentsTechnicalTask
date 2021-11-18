import { ErrorResponse } from '../models/error-response.model';
import { LoginParams } from '../models/login-params.model';
import { ClientApi } from './client-api.service';

const login = (
  params: LoginParams,
): Promise<{ token: string } | ErrorResponse> => {
  return ClientApi.post('api/login', params);
};

export const AuthApi = {
  login,
};
