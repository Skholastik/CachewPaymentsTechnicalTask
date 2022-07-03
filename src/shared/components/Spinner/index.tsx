import { Backdrop, CircularProgress } from '@material-ui/core';
import React, { FC } from 'react';

export const Spinner: FC = () => (
  <Backdrop open>
    <CircularProgress />
  </Backdrop>
);
