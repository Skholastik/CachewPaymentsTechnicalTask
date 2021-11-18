import React, { FC } from 'react';

import { Backdrop, CircularProgress } from '@material-ui/core';

export const Index: FC = () => (
  <Backdrop open>
    <CircularProgress />
  </Backdrop>
);

export default Index;
