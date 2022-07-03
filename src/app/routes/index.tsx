import React, { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { useAuth } from '@/features/Auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes: FC = () => {
  const { isAuthenticated } = useAuth();
  const element = useRoutes(isAuthenticated ? protectedRoutes : publicRoutes);

  return <>{element}</>;
};
