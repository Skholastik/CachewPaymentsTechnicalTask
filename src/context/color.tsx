import React, { useContext } from 'react';

import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';

import { dark, light } from '../themes';

type ColorContext = {
  toggleColorMode: () => void;
};

export const ColorModeContext = React.createContext<ColorContext>({
  toggleColorMode: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = React.useState(dark);
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === light ? dark : light));
  };

  return (
    <ColorModeContext.Provider
      value={{
        toggleColorMode,
      }}
    >
      <MaterialThemeProvider theme={mode}>{children}</MaterialThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default function useColorContext(): ColorContext {
  const colorContext = useContext(ColorModeContext);
  if (colorContext === undefined)
    throw new Error('toggleColorMode must be used within a useColorContext');

  return colorContext as ColorContext;
}
