const storage = localStorage;
const TOKEN = 'cashew-auth-token';

const setToken = (value: string): void => {
  storage.setItem(TOKEN, value);
};

const getToken = (): string | null => {
  return storage.getItem(TOKEN);
};

const removeToken = (): void => {
  storage.removeItem(TOKEN);
};

const hasToken = (): boolean => {
  return !!getToken();
};

export const StorageService = {
  setToken,
  getToken,
  hasToken,
  removeToken,
};
