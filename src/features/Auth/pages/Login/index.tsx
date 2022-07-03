import { Avatar, Box, Container, Stack, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { LoadingButton } from '@material-ui/lab';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { ILoginParams, useLogin } from '@/features/Auth';

export const Login: FC = () => {
  const { login, isLoading } = useLogin();
  const [formState, setFormState] = useState<ILoginParams>({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(formState);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh">
      <Container component="main" maxWidth="xs">
        <Stack alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>

          <Stack component="form" onSubmit={onSubmit} alignItems="center" sx={{ mt: 1 }} width={1}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>

            <TextField
              autoFocus
              required
              name="email"
              type="email"
              label="Email Address"
              autoComplete="email"
              value={formState.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="password"
              required
              type="password"
              variant="outlined"
              label="Password"
              autoComplete="password"
              value={formState.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <LoadingButton
              type="submit"
              loading={isLoading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </LoadingButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
