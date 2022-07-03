import React, { FC, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useAuth } from '@/features/Auth';

import { Login } from '../pages/Login';

export const AuthRoutes: FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const redirectToProtectedPageIfAuthenticated = () => {
    if (!isAuthenticated) return;

    navigate('/dashboard');
  };

  useEffect(redirectToProtectedPageIfAuthenticated, [
    isAuthenticated,
    redirectToProtectedPageIfAuthenticated,
  ]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
