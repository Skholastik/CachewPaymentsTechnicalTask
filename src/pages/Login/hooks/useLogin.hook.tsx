import { useCallback, useMemo, useState } from 'react';

import { LoginParams } from '../../../models/login-params.model';
import { AuthApi } from '../../../services/auth-api.service';

type LoginType = {
  loading: boolean;
  login: (params: LoginParams) => void;
};

export const useLogin = (): LoginType => {
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(async (params: LoginParams) => {
    try {
      setLoading(true);
      const auth = await AuthApi.login(params);
    } catch (error) {
      console.log(error);
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
