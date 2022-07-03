import { Alert, Snackbar, Typography } from '@material-ui/core';
import React, { FC, SyntheticEvent } from 'react';

import { useNotifications } from '../../hooks';

export const Notification: FC = () => {
  const { notification, clearNotification } = useNotifications();

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return;

    clearNotification();
  };

  return (
    <Snackbar open={!!notification.message} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={notification.type} sx={{ width: '100%' }}>
        <Typography variant="body1">{notification.message}</Typography>
      </Alert>
    </Snackbar>
  );
};
