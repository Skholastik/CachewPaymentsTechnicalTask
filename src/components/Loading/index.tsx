import React, { FC } from 'react';

import { Backdrop, CircularProgress } from '@material-ui/core';

export const Loading: FC = () => (
  <Backdrop open>
    <CircularProgress />
  </Backdrop>
);
