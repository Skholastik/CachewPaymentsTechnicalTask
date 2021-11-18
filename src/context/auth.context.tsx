import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Errors } from '../enums/errors.enum';
import { User } from '../models/user.model';
import { StorageService } from '../services/storage.service';
import { UserApi } from '../services/user-api.service';
import useNotification from './notification.context';

interface AuthContextType {
  loading: boolean;
  user: User;
  setUser: (user: User) => void;
  isUserAuthorized: () => boolean;
  processUser: (token: string) => Promise<void>;
}

const UserMockId = 2;
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { setError } = useNotification();
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(true);

  const isUserAuthorized = useCallback(() => StorageService.hasToken(), []);

  const loadUser = useCallback(async () => {
    setLoading(true);

    try {
      const userData = await UserApi.getUser(UserMockId);

      if ('error' in userData) setError(userData.error);
      else setUser(userData.data);
    } catch (error) {
      setError(Errors.UnhandledError);
    } finally {
      setLoading(false);
    }
  }, [setError]);

  const processUser = useCallback(
    async (token: string) => {
      StorageService.setToken(token);
      return loadUser();
    },
    [loadUser],
  );

  const memoizedValue = useMemo(
    () => ({
      loading,
      user,
      isUserAuthorized,
      processUser,
      setUser,
    }),
    [loading, user, isUserAuthorized, processUser],
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
