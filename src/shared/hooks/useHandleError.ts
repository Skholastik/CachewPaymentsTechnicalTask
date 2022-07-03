import { useEffect } from 'react';

import { useNotifications } from '@/features/Notifications';
import { Errors } from '@/shared';
import { IQueryError } from '@/shared/types/queryError';

export const useHandleError = (error: IQueryError) => {
  const { setError } = useNotifications();
  useEffect(() => {
    if (!error) return;

    // TODO Handle errors depending on type
    setError(Errors.UnhandledError);
  }, [error, setError]);
};
