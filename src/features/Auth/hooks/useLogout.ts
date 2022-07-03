import { useNavigate } from 'react-router-dom';

import { BaseQuery, TokenStorage } from '@/shared';

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    TokenStorage.removeToken();
    BaseQuery.util.resetApiState();
    navigate('/login');
  };

  return { logout };
};
