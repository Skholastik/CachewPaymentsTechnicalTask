const TokenPrefix = 'token';
const StoragePrefix = 'react_unicorn_';

export const Storage = {
  setItem: (name: string, item: any) =>
    window.localStorage.setItem(`${StoragePrefix}_${name}`, JSON.stringify(item)),
  getItem: (name: string) =>
    JSON.parse(window.localStorage.getItem(`${StoragePrefix}_${name}`) as string),
  removeItem: (name: string) => {
    window.localStorage.removeItem(`${StoragePrefix}_${name}`);
  },
};

export const TokenStorage = {
  getToken: () => Storage.getItem(TokenPrefix),
  setToken: (token: string) => Storage.setItem(TokenPrefix, token),
  hasToken: () => !!Storage.getItem(TokenPrefix),
};
