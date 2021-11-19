import React, { createContext, FC, useContext, useState } from 'react';

import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';

import { dark, light } from '../themes';

type ColorContext = {
  toggleThemeMode: () => void;
};

export const ThemeModeContext = createContext<ColorContext>({
  toggleThemeMode: () => {},
});

export const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState(dark);
  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === light ? dark : light));
  };

  return (
    <ThemeModeContext.Provider
      value={{
        toggleThemeMode,
      }}
    >
      <MaterialThemeProvider theme={mode}>{children}</MaterialThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default function useThemeContext(): ColorContext {
  const colorContext = useContext(ThemeModeContext);
  if (colorContext === undefined)
    throw new Error('toggleColorMode must be used within a useColorContext');

  return colorContext as ColorContext;
}
