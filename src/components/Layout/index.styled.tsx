import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';

export const LayoutContainer = styled(Container)(() => ({
  display: 'flex',
}));

export const LayoutWrapperBox = styled(Box)(() => ({
  flexGrow: 1,
}));

export const LayoutContentBox = styled(Box)(({ theme }) => ({
  paddingLeft: 132,
  paddingRight: 32,
  [theme.breakpoints.down('md')]: {
    paddingLeft: 32,
  },
  '@media print': {
    position: 'fixed',
  },
}));
