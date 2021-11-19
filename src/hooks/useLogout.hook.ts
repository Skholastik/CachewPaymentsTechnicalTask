import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../context/auth.context';
import { RoutePath } from '../enums/route-path.enum';

type LogoutType = {
  logout: () => void;
};

export const useLogout = (): LogoutType => {
  const history = useHistory();
  const { dropUser } = useAuthContext();

  const logout = useCallback(() => {
    dropUser();
    history.push(RoutePath.Login);
  }, [dropUser, history]);

  return useMemo(
    () => ({
      logout,
    }),
    [logout],
  );
};
