import { combineReducers } from '@reduxjs/toolkit';

import { NotificationSlice } from '@/features/Notifications';
import { BaseQuery } from '@/shared';

export const reducers = combineReducers({
  [BaseQuery.reducerPath]: BaseQuery.reducer,
  [NotificationSlice.name]: NotificationSlice.reducer,
});
