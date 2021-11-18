import { ErrorResponse } from './error-response.model';

export type LoginPositiveResponse = {
  token: string;
};

export type LoginResponse = LoginPositiveResponse | ErrorResponse;
