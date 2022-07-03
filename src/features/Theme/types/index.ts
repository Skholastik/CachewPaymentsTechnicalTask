import { Theme } from '@material-ui/core';

export type IColorContext = {
  mode: Theme;
  toggleThemeMode: () => void;
};
