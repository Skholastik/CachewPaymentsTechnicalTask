export type LoginPositiveResponse = {
  token: string;
};

export type LoginErrorResponse = {
  error: string;
};

export type LoginResponse = LoginPositiveResponse | LoginErrorResponse;
