import { NotificationTypes } from '@/features/Notifications';

export type INotificationMessage = string;

export type INotification = {
  message: INotificationMessage;
  type?: NotificationTypes;
};
