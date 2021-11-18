import { createTheme } from '@material-ui/core/styles';

export const dark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#161616',
      paper: 'rgba(27,27,27,1)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
