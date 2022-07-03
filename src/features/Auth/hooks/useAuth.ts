import { TokenStorage } from '@/shared';

export const useAuth = () => {
  return {
    isAuthenticated: TokenStorage.hasToken(),
  };
};
