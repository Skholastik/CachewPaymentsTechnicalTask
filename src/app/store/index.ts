import { configureStore } from '@reduxjs/toolkit';

import { BaseQuery } from '@/shared';

import { reducers } from './reducers';

export const Store = configureStore({
  reducer: reducers,
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(BaseQuery.middleware),
});
