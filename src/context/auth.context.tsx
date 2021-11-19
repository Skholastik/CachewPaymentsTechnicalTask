import React, {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ENV } from '../.env';
import { Errors } from '../enums/errors.enum';
import { User } from '../models/user.model';
import { StorageService } from '../services/storage.service';
import { UserApi } from '../services/user-api.service';
import useNotification from './notification.context';

interface AuthContextType {
  loading: boolean;
  user: User;
  isUserAuthorized: () => boolean;
  setupUser: (token: string) => Promise<void>;
  dropUser: () => void;
}

const EmptyUser = {} as User;

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const { setError } = useNotification();
  const [user, setUser] = useState<User>(EmptyUser);
  const [loading, setLoading] = useState<boolean>(true);

  const isUserAuthorized = useCallback(() => StorageService.hasToken(), []);

  const loadUser = useCallback(async () => {
    setLoading(true);

    try {
      const userData = await UserApi.getUser(ENV.mockUserId);

      if ('error' in userData) setError(userData.error);
      else setUser(userData.data);
    } catch (error) {
      setError(Errors.UnhandledError);
    } finally {
      setLoading(false);
    }
  }, [setError]);

  const setupUser = useCallback(
    async (token: string) => {
      StorageService.setToken(token);
      return loadUser();
    },
    [loadUser],
  );

  const dropUser = useCallback(() => {
    StorageService.removeToken();
    setUser(EmptyUser);
  }, []);

  const memoizedValue = useMemo(
    () => ({
      loading,
      user,
      isUserAuthorized,
      setupUser,
      dropUser,
    }),
    [loading, user, isUserAuthorized, setupUser, dropUser],
  );

  useEffect(() => {
    if (isUserAuthorized()) loadUser();
  }, [isUserAuthorized, loadUser]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = function (): AuthContextType {
  const authContext = useContext(AuthContext);
  if (authContext === undefined)
    throw new Error('useAuth must be used within a AuthProvider');

  return authContext;
};
