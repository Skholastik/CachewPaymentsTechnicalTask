import { useCallback, useMemo, useState } from 'react';

import useNotification from '../../../context/notification.context';
import { LoginParams } from '../../../models/login-params.model';
import { AuthApi } from '../../../services/auth-api.service';

type LoginType = {
  loading: boolean;
  login: (params: LoginParams) => void;
};

export const useLogin = (): LoginType => {
  const { setError, setSuccess } = useNotification();
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(async (params: LoginParams) => {
    try {
      setLoading(true);
      const auth = await AuthApi.login(params);

      if ('error' in auth) setError(auth.error);
      else setSuccess(auth.token);
    } catch (error) {
      console.log(error);
      setError('Unhandled error occurs');
    } finally {
      setLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      loading,
      login,
    }),
    [loading, login],
  );
};
