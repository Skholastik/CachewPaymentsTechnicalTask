import { useLoginMutation } from '@/features/Auth';
import { useHandleError } from '@/shared';

export const useLogin = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  useHandleError(error);

  return { login, isLoading };
};
