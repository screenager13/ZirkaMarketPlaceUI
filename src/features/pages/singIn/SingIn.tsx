import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Card, Typography, TextField, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

type LoginForm = {
  userName: string;
  password: string;
};

const SingIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm<LoginForm>({
    defaultValues: {
      userName: '',
      password: '',
    },
    mode: 'all',
  });

  const handleSubmitLogin = async (data: LoginForm) => {
    try {
      const response = await fetch('', // link on back
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const result = await response.json();
      localStorage.setItem('token', result.token);
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Login failed: ' + (error as Error).message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Card
        elevation={4}
        sx={{
          width: 450,
          minHeight: 450,
          backgroundColor: 'primary.main',
          p: 3,
          borderRadius: 3,
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 5,
        }}
      >
        <Typography variant="h5" color="textSecondary" sx={{ mb: 3 }}>
          Zaloguj się
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            width: '100%',
            alignItems: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              width: '50%',
              justifyContent: 'center',
            }}
          >
            <Controller
              name="userName"
              control={control}
              rules={{ required: 'Nazwa użytkownika jest wymagana' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Nazwa użytkownika"
                  fullWidth
                  color="secondary"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Hasło jest wymagane',
                minLength: {
                  value: 6,
                  message: 'Hasło musi mieć co najmniej 6 znaków',
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Hasło"
                  type="password"
                  fullWidth
                  color="secondary"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              width: '1px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#444',
                color: '#fff',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#555' },
              }}
            >
              Zaloguj przez Google
            </Button>
          </Box>
        </Box>

        <Box sx={{ width: '100%', mt: 3 }}>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            sx={{ width: '100%', padding: 1.5, fontWeight: 'bold' }}
            onClick={() =>
              trigger().then((isValid) => {
                if (isValid) {
                  handleSubmit(handleSubmitLogin)();
                }
              })
            }
          >
            Zaloguj
          </Button>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              mt: 2,
              textAlign: 'center',
              cursor: 'pointer',
              display: 'inline',
            }}
          >
            Nie masz konta?{' '}
          </Typography>
          <Link to={'/register'}>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                textAlign: 'center',
                cursor: 'pointer',
                display: 'inline',
                color: 'ff0000',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Utwórz nowe konto
            </Typography>
          </Link>
        </Box>
      </Card>
    </Box>
  );
};

export default SingIn;