import { CaseReducer, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { INotification, INotificationMessage } from '.././types';
import { NotificationTypes } from '../constants';

const EmptyNotification = { message: '' };

interface NotificationState {
  notification: INotification;
}

const initialState: NotificationState = {
  notification: { ...EmptyNotification },
};

const clearNotification: CaseReducer<NotificationState, PayloadAction> = (state) => {
  state.notification = { ...EmptyNotification };
};

const setError: CaseReducer<NotificationState, PayloadAction<INotificationMessage>> = (
  state,
  { payload }
) => {
  state.notification = { message: payload, type: NotificationTypes.Error };
};

const setSuccess: CaseReducer<NotificationState, PayloadAction<INotificationMessage>> = (
  state,
  { payload }
) => {
  state.notification = { message: payload, type: NotificationTypes.Success };
};

export const NotificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setError,
    setSuccess,
    clearNotification,
  },
});
