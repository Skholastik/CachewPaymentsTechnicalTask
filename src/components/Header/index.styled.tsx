import { AppBar, Avatar, Box, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const HeaderAppBar = styled(AppBar)(() => ({
  paddingTop: 14,
  paddingRight: 32,
  paddingBottom: 14,
  paddingLeft: 32,
  background: 'none',
  boxShadow: 'none',
  flexDirection: 'row',
  justifyContent: 'flex-end',
}));

export const HeaderButton = styled(Button)(({ theme }) => ({
  color: theme.typography.body2.color,
  fontSize: theme.typography.body2.fontSize,
  textTransform: 'none',
  '& .MuiButton-endIcon': {
    marginLeft: 2,
  },
}));

export const HeaderMobileDrawer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& .MuiButtonBase-root': {
      marginRight: 20,
    },
  },
}));

export const HeaderAvatar = styled(Avatar)(() => ({
  height: 30,
  width: 30,
  marginRight: 4,
}));
