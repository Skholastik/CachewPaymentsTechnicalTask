import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { NotificationTypes } from '../enums/notification-types.enum';
import { Notification } from '../models/notification.model';

interface NotificationContextType {
  notification: Notification;
  setNotification: (notification: Notification) => void;
  clearNotification: () => void;
  setError: (message: string) => void;
  setSuccess: (message: string) => void;
}

const EmptyNotification = { message: '' };

const NotificationContext = createContext<NotificationContextType>(
  {} as NotificationContextType,
);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [notification, setNotification] =
    useState<Notification>(EmptyNotification);

  const clearNotification = useCallback(() => {
    setNotification(EmptyNotification);
  }, []);

  const setError = useCallback((message: string) => {
    setNotification({ message, type: NotificationTypes.Error });
  }, []);

  const setSuccess = useCallback((message: string) => {
    setNotification({ message, type: NotificationTypes.Success });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      setError,
      setSuccess,
      notification,
      setNotification,
      clearNotification,
    }),
    [setError, setSuccess, notification, setNotification, clearNotification],
  );

  return (
    <NotificationContext.Provider value={memoizedValue}>
      {children}
    </NotificationContext.Provider>
  );
}

export default function useNotification(): NotificationContextType {
  const notificationContext = useContext(NotificationContext);
  if (notificationContext === undefined)
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    );

  return notificationContext;
}
