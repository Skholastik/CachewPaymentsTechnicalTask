import { ListItem, SvgIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  SidebarDrawer,
  SidebarList,
  SidebarListItemIcon,
  SidebarListItemText,
  SidebarListItemButton,
} from './styled';

type ISidebarProps = {
  isOpen: boolean;
  changeDrawerState: (isOpen: boolean) => void;
};

export const Sidebar: FC<ISidebarProps> = ({ isOpen, changeDrawerState }) => {
  const [drawerAnimation, setDrawerAnimation] = useState('default');
  return (
    <SidebarDrawer
      isOpen={isOpen}
      onMouseEnter={() => setDrawerAnimation('enter')}
      onMouseLeave={() => setDrawerAnimation('out')}
      drawerAnimation={drawerAnimation}
      variant="permanent"
    >
      <SidebarList disablePadding>
        <ListItem disablePadding>
          <NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'active' : '')}>
            <SidebarListItemButton onClick={() => changeDrawerState(false)}>
              <SidebarListItemIcon>
                <SvgIcon component={HomeIcon} />
              </SidebarListItemIcon>
              <SidebarListItemText disableTypography primary="Dashboard" />
            </SidebarListItemButton>
          </NavLink>
        </ListItem>
      </SidebarList>
    </SidebarDrawer>
  );
};
