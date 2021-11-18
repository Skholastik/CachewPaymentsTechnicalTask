import { ElementType } from 'react';

import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListItemButtonProps,
  alpha,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { keyframes } from '@material-ui/styled-engine';

const SidebarAnimationFadeIn = (
  color: string,
  transparentColor: string,
) => keyframes`
  0% {
    width: 110px;
    background-color: ${transparentColor};
  }

  0.1% {
    width: 300px;
    background-color: ${transparentColor};
  }

  100% {
    width: 300px;
    background-color: ${color};
  }
`;

const SidebarAnimationFadeOut = (
  color: string,
  transparentColor: string,
) => keyframes`
  0% {
    width: 300px;
    background-color: ${color};
  }

  99.9% {
    width: 300px;
    background-color: ${transparentColor};
  }

  100% {
    width: 110px;
    background-color: ${transparentColor};
  }
`;

export const SidebarDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'isOpen' && prop !== 'drawerAnimation',
})<{
  isOpen?: boolean;
  drawerAnimation?: string;
}>(({ isOpen, drawerAnimation, theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: 0,

    '& .MuiListItemIcon-root': {
      paddingLeft: 18,
    },
    '& .MuiDrawer-paper': {
      borderRight: 'none',
      transition: 'width 0.3s',
      width: 0,
      backgroundColor: theme.palette.background.paper,
      ...(isOpen && {
        width: '100%',
      }),
    },
  },
  [theme.breakpoints.up('md')]: {
    '& .MuiPaper-root': {
      overflowX: 'hidden',
      overflowY: 'hidden',
    },
    position: 'fixed',
    zIndex: theme.zIndex.drawer,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    width: 110,
    '& .MuiListItemText-root, .MuiTypography-root': {
      opacity: 0,
      transition: 'opacity 0.3s',
      margin: 0,
    },
    '& .MuiDrawer-paper': {
      borderRight: 'none',
      width: 110,
      backgroundColor: alpha(theme.palette.background.paper, 0),
      ...(drawerAnimation === 'enter' && {
        animation: `${SidebarAnimationFadeIn(
          theme.palette.background.paper,
          alpha(theme.palette.background.paper, 0),
        )} 0.3s both`,
      }),
      ...(drawerAnimation === 'out' && {
        animation: `${SidebarAnimationFadeOut(
          theme.palette.background.paper,
          alpha(theme.palette.background.paper, 0),
        )} 0.3s both`,
      }),

      '& .MuiListItemIcon-root': {
        paddingLeft: 18,
      },
    },
    '&:hover': {
      '& .MuiTypography-root, .MuiListItemText-root': {
        transition: 'opacity 0.3s',
        opacity: 1,
      },
    },
  },
}));

export const SidebarList = styled(List)(({ theme }) => ({
  paddingRight: 20,
  '& .MuiListItem-root': {
    whiteSpace: 'nowrap',
  },
  '& .active': {
    borderLeft: `3px solid ${theme.palette.action.selected}`,
    '&:hover': {
      '& .MuiSvgIcon-root': {
        fill: theme.palette.common.white,
      },
    },
    '& .MuiSvgIcon-root': {
      fill: theme.palette.action.selected,
    },
  },
}));

export const SidebarListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: 70,
  transition: '0.5s',
}));

export const SidebarListItemText = styled(ListItemText)(() => ({
  fontSize: 14,
}));

export const SidebarListItemButton = styled(ListItemButton)<
  ListItemButtonProps & {
    component: ElementType;
    to: string;
    exact?: boolean;
  }
>(({ theme }) => ({
  paddingTop: 12,
  borderLeft: `3px solid ${theme.palette.background.paper}`,
  paddingRight: 20,
  paddingBottom: 12,
  paddingLeft: 20,
}));
