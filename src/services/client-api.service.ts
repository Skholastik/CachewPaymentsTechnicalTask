import axios from 'axios';

export const ClientApi = axios.create({
  baseURL: 'https://reqres.in/',
});

ClientApi.interceptors.response.use((response) => response.data);
