import { Button, Typography } from '@material-ui/core';
import React, { FC, useCallback } from 'react';

import { Layout } from './styled';

export const ErrorFallback: FC = () => {
  const refresh = useCallback(() => window.location.assign(window.location.origin), []);

  return (
    <Layout>
      <Typography component="h5">Ooops, something went wrong :( </Typography>
      <Button variant="contained" onClick={refresh}>
        Refresh
      </Button>
    </Layout>
  );
};
