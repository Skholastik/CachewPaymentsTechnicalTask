import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import React, { createContext, FC, useState } from 'react';

import { IColorContext, dark, light } from '@/features/Theme';

export const ThemeModeContext = createContext<IColorContext>({
  mode: light,
  toggleThemeMode: () => {},
});

export const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState(light);
  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === light ? dark : light));
  };

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        toggleThemeMode,
      }}
    >
      <MaterialThemeProvider theme={mode}>{children}</MaterialThemeProvider>
    </ThemeModeContext.Provider>
  );
};
