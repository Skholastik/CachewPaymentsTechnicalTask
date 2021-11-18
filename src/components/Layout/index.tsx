import React, { FC, useState } from 'react';

import { Sidebar } from '../Sidebar';
import {
  LayoutContainer,
  LayoutContentBox,
  LayoutWrapperBox,
} from './index.styled';

export const Layout: FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = (drawer: boolean) => {
    setOpen(drawer);
  };

  return (
    <LayoutContainer maxWidth={false} disableGutters>
      <Sidebar toggleDrawer={toggleDrawer} isOpen={isOpen} />
      <LayoutWrapperBox>
        <LayoutContentBox component="main">{children}</LayoutContentBox>
      </LayoutWrapperBox>
    </LayoutContainer>
  );
};
