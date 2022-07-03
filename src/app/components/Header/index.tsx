import { IconButton, Menu, MenuItem } from '@material-ui/core';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuIcon from '@material-ui/icons/Menu';
import React, { FC, useCallback, useState } from 'react';

import { useLogout } from '@/features/Auth';
import { ThemeSwitcher } from '@/features/Theme';
import { CurrentUserAvatar } from '@/features/User';

import { HeaderAppBar, HeaderButton, HeaderControlsContainer, HeaderMobileDrawer } from './styled';

type IHeaderProps = {
  isOpen: boolean;
  changeDrawerState: (isOpen: boolean) => void;
};

export const Header: FC<IHeaderProps> = ({ isOpen, changeDrawerState }) => {
  const { logout } = useLogout();
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);

  const onMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(event.currentTarget);
    setShowAccountMenu(true);
  };

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
        <IconButton onClick={() => changeDrawerState(!isOpen)}>
          <MenuIcon />
        </IconButton>
      </HeaderMobileDrawer>

      <HeaderControlsContainer>
        <HeaderButton variant="text" endIcon={<ArrowDownIcon />} onClick={onMenuOpen}>
          <CurrentUserAvatar />
        </HeaderButton>
        <ThemeSwitcher />
      </HeaderControlsContainer>

      <Menu anchorEl={anchorMenu} open={showAccountMenu} onClose={onMenuClose}>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </HeaderAppBar>
  );
};
