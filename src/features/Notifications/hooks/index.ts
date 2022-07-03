import { useDispatch } from 'react-redux';

import { INotificationMessage, NotificationSlice } from '@/features/Notifications';
import { useAppSelector } from '@/shared';

export const useNotifications = () => {
  const dispatch = useDispatch();
  const actions = NotificationSlice.actions;
  const notification = useAppSelector(({ notifications }) => notifications.notification);

  const setError = (message: INotificationMessage) => dispatch(actions.setError(message));
  const setSuccess = (message: INotificationMessage) => dispatch(actions.setSuccess(message));
  const clearNotification = () => dispatch(actions.clearNotification());

  return {
    notification,
    setError,
    setSuccess,
    clearNotification,
  };
};
