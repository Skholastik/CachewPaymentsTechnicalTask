import { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../../../context/auth.context';
import useNotification from '../../../context/notification.context';
import { Errors } from '../../../enums/errors.enum';
import { RoutePath } from '../../../enums/route-path.enum';
import { LoginParams } from '../../../models/login-params.model';
import { AuthApi } from '../../../services/auth-api.service';

type LoginType = {
  loading: boolean;
  login: (params: LoginParams) => void;
};

export const useLogin = (): LoginType => {
  const history = useHistory();
  const { setupUser } = useAuthContext();
  const { setError } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    async (params: LoginParams) => {
      try {
        setLoading(true);
        const data = await AuthApi.login(params);

        if ('error' in data) setError(data.error);
        else {
          await setupUser(data.token);
          history.push(RoutePath.Dashboard);
        }
      } catch (error) {
        setError(Errors.UnhandledError);
      } finally {
        setLoading(false);
      }
    },
    [history, setupUser, setError],
  );

  return useMemo(
    () => ({
      loading,
      login,
    }),
    [loading, login],
  );
};
