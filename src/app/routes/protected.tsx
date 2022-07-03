import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router/lib/router';

import { Layout } from '@/app/components/Layout';
import { LazyImport } from '@/shared';

const { Dashboard } = LazyImport(() => import('@/features/Dashboard'), 'Dashboard');

export const protectedRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <Navigate to="/dashboard" /> },
    ],
  },
] as RouteObject[];
