import { LoginParams } from '../models/login-params.model';
import { LoginResponse } from '../models/login-response.model';
import { ClientApi } from './client-api.service';

const login = (params: LoginParams): Promise<LoginResponse> => {
  return ClientApi.post('api/login', params);
};

export const AuthApi = {
  login,
};
