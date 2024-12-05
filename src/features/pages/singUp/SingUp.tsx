import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Card, Typography, TextField, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
type RegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  role: string;
  password: string;
};

const SingUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm<RegisterForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      role: '',
      password: '',
    },
    mode: 'all',
  });

  const handleSubmitRegister = async (data: RegisterForm) => {
    try {
      const response = await fetch('', // link on back
        {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      alert('Registration successful! Please log in.');
      window.location.href = '/login';
    } catch (error: any) {
      alert('Registration failed: ' + error.message);
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
          width: 600,
          minHeight: 500,
          backgroundColor: 'primary.main',
          p: 4,
          borderRadius: 3,
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 5,
        }}
      >
        <Typography variant="h5" color="textSecondary" sx={{ mb: 3 }}>
          Rejestracja
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            width: '100%',
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
              name="firstName"
              control={control}
              rules={{ required: 'Imię jest wymagane' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Imię"
                  fullWidth
                  color="secondary"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: 'Nazwisko jest wymagane' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nazwisko"
                  fullWidth
                  color="secondary"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email jest wymagany',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Nieprawidłowy adres email',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  color="secondary"
                  error={!!errors.email}
                  helperText={errors.email?.message}
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
              gap: 3,
              width: '50%',
              justifyContent: 'center',
            }}
          >
            <Controller
              name="userName"
              control={control}
              rules={{ required: 'Nazwa użytkownika jest wymagana' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nazwa użytkownika"
                  fullWidth
                  color="secondary"
                  error={!!errors.userName}
                  helperText={errors.userName?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
            <Controller
              name="role"
              control={control}
              rules={{ required: 'Rola jest wymagana' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Rola"
                  fullWidth
                  color="secondary"
                  error={!!errors.role}
                  helperText={errors.role?.message}
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
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Hasło"
                  type="password"
                  fullWidth
                  color="secondary"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Box>
        </Box>

        <Box sx={{ width: '100%', mt: 3 }}>
        <Button
        type="button"
        variant="contained"
        color="secondary"
        sx={{ width: '100%', padding: 1.5, fontWeight: 'bold' }}
        onClick={async () => {
            const isValid = await trigger();
            if (isValid) {
            handleSubmit(handleSubmitRegister)();
            }
        }}
        >
        Zarejestruj się
        </Button>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
        <Link to={'/login'} style={{ textDecoration: 'none' }}>
        <Typography
            variant="body2"
            color="textSecondary"
            sx={{
            mt: 2,
            cursor: 'pointer',
            }}
        >
            Mam już{' '}
            <Typography
            component="span"
            sx={{
                color: '',
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                textDecoration: 'underline',
                },
            }}
            >
            konto
            </Typography>
        </Typography>
        </Link>
        </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SingUp;
