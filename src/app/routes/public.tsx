import React from 'react';
import { RouteObject } from 'react-router/lib/router';

import { LazyImport } from '@/shared';

const { AuthRoutes } = LazyImport(() => import('@/features/Auth'), 'AuthRoutes');

export const publicRoutes = [
  {
    path: '/*',
    element: <AuthRoutes />,
  },
] as RouteObject[];
