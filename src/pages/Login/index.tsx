import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState,
} from 'react';

import {
  Avatar,
  Container,
  Stack,
  TextField,
  Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { LoadingButton } from '@material-ui/lab';

import { useLogin } from './hooks/useLogin.hook';

export const Login: FC = () => {
  const { login, loading } = useLogin();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      login({ email, password });
    },
    [email, login, password],
  );

  const onEmailChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onPasswordChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  return (
    <Container component="main" maxWidth="xs">
      <Stack alignItems="center">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>

        <Stack
          component="form"
          onSubmit={onSubmit}
          alignItems="center"
          sx={{ mt: 1 }}
          width={1}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <TextField
            autoFocus
            required
            id="email"
            label="Email Address"
            autoComplete="email"
            value={email}
            onChange={onEmailChange}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            variant="outlined"
            label="Password"
            autoComplete="password"
            value={password}
            onChange={onPasswordChange}
            fullWidth
            margin="normal"
          />
          <LoadingButton
            type="submit"
            loading={loading}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </LoadingButton>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Login;
