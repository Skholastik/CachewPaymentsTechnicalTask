import { createTheme } from '@material-ui/core/styles';

export const light = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
      paper: 'rgb(165,165,165, 1)',
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
