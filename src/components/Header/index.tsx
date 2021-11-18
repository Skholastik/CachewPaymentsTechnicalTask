import React from 'react';

import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useAuthContext } from '../../context/auth.context';
import { GetUserDisplayName } from '../../utils/get-user-display-name.util';
import { SidebarProps } from '../Sidebar';
import {
  HeaderAppBar,
  HeaderAvatar,
  HeaderButton,
  HeaderMobileDrawer,
} from './index.styled';

export const Header: React.FC<SidebarProps> = (props) => {
  const { user } = useAuthContext();
  const { isOpen, toggleDrawer } = props;

  return (
    <HeaderAppBar position="static">
      <HeaderMobileDrawer>
        <IconButton onClick={() => toggleDrawer(!isOpen)}>
          <MenuIcon />
        </IconButton>
      </HeaderMobileDrawer>
      <HeaderButton variant="text">
        <HeaderAvatar alt={`${GetUserDisplayName(user)}`} src={user.avatar} />
        {`${GetUserDisplayName(user)}`}
      </HeaderButton>
    </HeaderAppBar>
  );
};
