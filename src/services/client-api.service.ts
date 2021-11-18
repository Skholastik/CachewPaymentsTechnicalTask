import axios from 'axios';

import { ENV } from '../.env';

export const ClientApi = axios.create({
  baseURL: ENV.endpointUrl,
});

ClientApi.interceptors.response.use(
  (response) => response.data,
  ({ response }) => response.data,
);
