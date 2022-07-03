import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';

export const Layout = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const Message = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));
