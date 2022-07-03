import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '@/features/Auth';
import { TokenStorage, useHandleError } from '@/shared';

export const useLogin = () => {
  const navigate = useNavigate();
  const [login, { isLoading, isSuccess, data, error }] = useLoginMutation();

  const onSuccessLogin = () => {
    if (!isSuccess || !data) return;

    TokenStorage.setToken(data);
    navigate('/dashboard');
  };

  useHandleError(error);
  useEffect(onSuccessLogin, [isSuccess, data, navigate]);

  return { login, isLoading };
};
