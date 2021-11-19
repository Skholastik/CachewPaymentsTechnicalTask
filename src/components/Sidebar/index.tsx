import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ListItem, SvgIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import { RoutePath } from '../../enums/route-path.enum';
import {
  SidebarDrawer,
  SidebarList,
  SidebarListItemIcon,
  SidebarListItemText,
  SidebarListItemButton,
} from './index.styled';

export type SidebarProps = {
  isOpen: boolean;
  toggleDrawer: (drawer: boolean) => void;
};

export const Sidebar: FC<SidebarProps> = (props) => {
  const { isOpen, toggleDrawer } = props;
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
          <SidebarListItemButton
            onClick={() => toggleDrawer(false)}
            exact
            component={NavLink}
            to={RoutePath.Main}
          >
            <SidebarListItemIcon>
              <SvgIcon component={HomeIcon} />
            </SidebarListItemIcon>
            <SidebarListItemText disableTypography primary="Dashboard" />
          </SidebarListItemButton>
        </ListItem>
      </SidebarList>
    </SidebarDrawer>
  );
};
