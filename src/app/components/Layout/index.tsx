import React, { FC, Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Spinner } from '@/shared';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

import { LayoutContainer, LayoutContentBox, LayoutWrapperBox } from './styled';

export const Layout: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const changeDrawerState = (drawer: boolean) => {
    setOpen(drawer);
  };

  return (
    <LayoutContainer maxWidth={false} disableGutters>
      <Sidebar changeDrawerState={changeDrawerState} isOpen={isOpen} />
      <LayoutWrapperBox>
        <Header isOpen={isOpen} changeDrawerState={changeDrawerState} />
        <LayoutContentBox component="main">
          <Suspense fallback={Spinner}>
            <Outlet />
          </Suspense>
        </LayoutContentBox>
      </LayoutWrapperBox>
    </LayoutContainer>
  );
};
