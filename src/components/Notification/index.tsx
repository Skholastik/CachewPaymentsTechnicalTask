import React, { FC } from 'react';

import { Alert, Snackbar, Typography } from '@material-ui/core';

import useNotification from '../../context/notification.context';

export const Notification: FC = () => {
  const { notification, clearNotification } = useNotification();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return;

    clearNotification();
  };

  return (
    <Snackbar
      open={!!notification.message}
      autoHideDuration={10000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={notification.type}
        sx={{ width: '100%' }}
      >
        <Typography variant="body1">{notification.message}</Typography>
      </Alert>
    </Snackbar>
  );
};
