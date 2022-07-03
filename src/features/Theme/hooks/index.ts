import { useContext } from 'react';

import { IColorContext, ThemeModeContext } from '@/features/Theme';

export const useThemeContext = (): IColorContext => {
  const colorContext = useContext(ThemeModeContext);
  if (colorContext === undefined)
    throw new Error('toggleColorMode must be used within a useColorContext');

  return colorContext;
};
