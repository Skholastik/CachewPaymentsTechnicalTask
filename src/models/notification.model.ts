import { NotificationTypes } from '../enums/notification-types.enum';

export type Notification = {
  message: string;
  type?: NotificationTypes;
};
