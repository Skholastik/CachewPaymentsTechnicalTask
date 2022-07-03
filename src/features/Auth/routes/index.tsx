import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';

export const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
