import { Box, IconButton, useTheme } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons/';

import { useThemeContext } from '@/features/Theme';

export const ThemeSwitcher = () => {
  const theme = useTheme();
  const { toggleThemeMode } = useThemeContext();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={toggleThemeMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Box>
  );
};
