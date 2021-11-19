import React, { FC, useCallback, useState } from 'react';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuIcon from '@material-ui/icons/Menu';

import { useAuthContext } from '../../context/auth.context';
import { useLogout } from '../../hooks/useLogout.hook';
import { GetUserDisplayName } from '../../utils/get-user-display-name.util';
import { SidebarProps } from '../Sidebar';
import {
  HeaderAppBar,
  HeaderAvatar,
  HeaderButton,
  HeaderMobileDrawer,
} from './index.styled';

export const Header: FC<SidebarProps> = (props) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { isOpen, toggleDrawer } = props;
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);

  const onMenuOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorMenu(event.currentTarget);
      setShowAccountMenu(true);
    },
    [],
  );

  const onMenuClose = useCallback(() => {
    setAnchorMenu(null);
    setShowAccountMenu(false);
  }, []);

  const onLogout = useCallback(() => {
    setShowAccountMenu(false);
    logout();
  }, [logout]);

  return (
    <HeaderAppBar position="static">
      <HeaderMobileDrawer>
        <IconButton onClick={() => toggleDrawer(!isOpen)}>
          <MenuIcon />
        </IconButton>
      </HeaderMobileDrawer>
      <HeaderButton
        variant="text"
        endIcon={<ArrowDownIcon />}
        onClick={onMenuOpen}
      >
        <HeaderAvatar alt={`${GetUserDisplayName(user)}`} src={user.avatar} />
        {`${GetUserDisplayName(user)}`}
      </HeaderButton>
      <Menu anchorEl={anchorMenu} open={showAccountMenu} onClose={onMenuClose}>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </HeaderAppBar>
  );
};
