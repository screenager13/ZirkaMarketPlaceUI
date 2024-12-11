import React, { useState } from 'react';
import { Home, Person, Settings, Logout } from '@mui/icons-material';
import {
    Box,
    Typography,
    Button,
    TextField,
    MenuItem,
    Card,
} from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const Dashboard: React.FC = () => {
    const [activeView, setActiveView] = useState<
        'home' | 'profile' | 'settings'
    >('home');
    const [user, setUser] = useState({
        firstName: 'Vovka',
        lastName: 'Hlev',
        email: 'nogot.barvinkovo@gmail.com',
        userName: 'syninogot',
        role: 'Sprzedawca',
    });
    const handleLogout = () => {
        console.log('User logged out');
        alert('Musisz być zalogowany!');
    };
    const [initialUser, setInitialUser] = useState(user);
    const [isEditing, setIsEditing] = useState(false);
    const handleChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | { target: { name: string; value: string } },
    ) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const isFormValid = () => {
        return (
            user.firstName &&
            user.lastName &&
            user.email &&
            user.userName &&
            user.role
        );
    };
    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setUser(initialUser);
        setIsEditing(false);
    };

    const handleSave = () => {
        setInitialUser(user);
        setIsEditing(false);
    };
    return (
        <Box sx={{ display: 'flex', height: 'flex', margin: '80px' }}>
            <Box
                sx={{
                    width: '250px',
                    backgroundColor: 'primary.main',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                    margin: '20px',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        textAlign: 'center',
                    }}
                >
                    Twoje konto
                </Typography>
                <Box>
                    <Box
                        sx={{
                            listStyleType: 'none',
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <Box
                            onClick={() => setActiveView('home')}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '20px 0',
                                padding: '10px',
                                borderRadius: '8px',
                                transition: 'background 0.3s ease',
                                cursor: 'pointer',
                                background:
                                    activeView === 'home'
                                        ? 'rgba(255, 255, 255, 0.2)'
                                        : 'transparent',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.2)',
                                },
                            }}
                        >
                            <Home
                                sx={{
                                    color: 'text.primary',
                                    marginRight: '15px',
                                    fontSize: '24px',
                                }}
                            />
                            <Typography
                                sx={{
                                    color: 'text.primary',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                }}
                            >
                                Główna
                            </Typography>
                        </Box>
                        <Box
                            onClick={() => setActiveView('profile')}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '20px 0',
                                padding: '10px',
                                borderRadius: '8px',
                                transition: 'background 0.3s ease',
                                cursor: 'pointer',
                                background:
                                    activeView === 'profile'
                                        ? 'rgba(255, 255, 255, 0.2)'
                                        : 'transparent',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.2)',
                                },
                            }}
                        >
                            <Person
                                sx={{
                                    color: 'text.primary',
                                    marginRight: '15px',
                                    fontSize: '24px',
                                }}
                            />
                            <Typography
                                sx={{
                                    color: 'text.primary',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                }}
                            >
                                Dane użytkownika
                            </Typography>
                        </Box>
                        <Box
                            onClick={() => setActiveView('settings')}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '20px 0',
                                padding: '10px',
                                borderRadius: '8px',
                                transition: 'background 0.3s ease',
                                cursor: 'pointer',
                                background:
                                    activeView === 'settings'
                                        ? 'rgba(255, 255, 255, 0.2)'
                                        : 'transparent',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.2)',
                                },
                            }}
                        >
                            <Settings
                                sx={{
                                    color: 'text.primary',
                                    marginRight: '15px',
                                    fontSize: '24px',
                                }}
                            />
                            <Typography
                                sx={{
                                    color: 'text.primary',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                }}
                            >
                                Ustawienia
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '20px 0',
                                padding: '10px',
                                borderRadius: '8px',
                                transition: 'background 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.2)',
                                },
                            }}
                        >
                            <Logout
                                sx={{
                                    color: 'text.primary',
                                    marginRight: '15px',
                                    fontSize: '24px',
                                }}
                            />
                            <Button
                                onClick={handleLogout}
                                sx={{
                                    color: '#ff4d4f',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    textTransform: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                }}
                            >
                                Wylogowanie
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ flex: 1, padding: '20px' }}>
                {activeView === 'home' && (
                    <Box>
                        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                            Witam, {user.firstName + ' ' + user.lastName}!{' '}
                            <WavingHandIcon
                                sx={{
                                    color: '#f3c30b',
                                    marginRight: '25px',
                                    fontSize: '35px',
                                }}
                            />
                        </Typography>
                        <Box
                            sx={{
                                border: '2px solid rgba(0, 0, 0, 0.1)',
                                borderRadius: '8px',
                                padding: '13px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: 'primary.main',
                            }}
                        >
                            <Typography>
                                Tutaj będziesz mógł zobaczyć całą informacje o
                                swoim koncie na naszym MarketPlace.
                            </Typography>
                        </Box>
                    </Box>
                )}
                {activeView === 'profile' && (
                    <Box>
                        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                            Informacje o użytkowniku
                        </Typography>
                        <Box
                            sx={{
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: '12px',
                                padding: '16px',
                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
                                backgroundColor: 'primary.main',
                            }}
                        >
                            <Box
                                component="table"
                                sx={{
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                }}
                            >
                                <Box component="tbody">
                                    <Box
                                        component="tr"
                                        sx={{
                                            borderBottom: '1px solid',
                                            borderColor: 'divider',
                                        }}
                                    >
                                        <Box
                                            component="td"
                                            sx={{
                                                padding: '8px',
                                                fontWeight: 'bold',
                                                color: 'text.primary',
                                            }}
                                        >
                                            Imię Nazwisko
                                        </Box>
                                        <Box
                                            component="td"
                                            sx={{
                                                padding: '8px',
                                                color: 'text.secondary',
                                            }}
                                        >
                                            {user.firstName +
                                                ' ' +
                                                user.lastName}
                                        </Box>
                                    </Box>
                                    <Box
                                        component="tr"
                                        sx={{
                                            borderBottom: '1px solid',
                                            borderColor: 'divider',
                                        }}
                                    >
                                        <Box
                                            component="td"
                                            sx={{
                                                padding: '8px',
                                                fontWeight: 'bold',
                                                color: 'text.primary',
                                            }}
                                        >
                                            Email
                                        </Box>
                                        <Box
                                            component="td"
                                            sx={{
                                                padding: '8px',
                                                color: 'text.secondary',
                                            }}
                                        >
                                            {user.email}
                                        </Box>
                                    </Box>
                                    <Box
                                        component="tr"
                                        sx={{
                                            borderBottom: '1px solid',
                                            borderColor: 'divider',
                                        }}
                                    >
                                        <Box
                                            component="td"
                                            sx={{
                                                padding: '8px',
                                                fontWeight: 'bold',
                                                color: 'text.primary',
                                            }}
                                        >
                                            Nazwa użytkownika
                                        </Box>
                                        <Box
                                            component="td"
                                            sx={{
                                                padding: '8px',
                                                color: 'text.secondary',
                                            }}
                                        >
                                            {user.userName}
                                        </Box>
                                    </Box>
                                    <Box component="tr">
                                        <Box
                                            component="td"
                                            sx={{
                                                padding: '8px',
                                                fontWeight: 'bold',
                                                color: 'text.primary',
                                            }}
                                        >
                                            Rola
                                        </Box>
                                        <Box
                                            component="td"
                                            sx={{
                                                padding: '8px',
                                                color: 'text.secondary',
                                            }}
                                        >
                                            {user.role}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
                {activeView === 'settings' && (
                    <Box>
                        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                            Edytuj Profil
                        </Typography>
                        <Card
                            sx={{
                                padding: '20px',
                                borderRadius: '12px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: 'primary.main',
                            }}
                        >
                            <Box
                                component="form"
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '16px',
                                }}
                            >
                                <TextField
                                    label="Imię"
                                    name="firstName"
                                    value={user.firstName}
                                    onChange={handleChange}
                                    fullWidth
                                    error={!user.firstName && isEditing}
                                    helperText={
                                        !user.firstName && isEditing
                                            ? 'Pole "Imię" nie może być puste.'
                                            : ''
                                    }
                                    color="secondary"
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        },
                                        input: {
                                            readOnly: !isEditing,
                                        },
                                    }}
                                />
                                <TextField
                                    label="Nazwisko"
                                    name="lastName"
                                    value={user.lastName}
                                    onChange={handleChange}
                                    fullWidth
                                    error={!user.lastName && isEditing}
                                    helperText={
                                        !user.lastName && isEditing
                                            ? 'Pole "Nazwisko" nie może być puste.'
                                            : ''
                                    }
                                    color="secondary"
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        },
                                        input: {
                                            readOnly: !isEditing,
                                        },
                                    }}
                                />
                                <TextField
                                    label="Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    fullWidth
                                    error={Boolean(
                                        (!user.email ||
                                            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                                                user.email,
                                            )) &&
                                            isEditing,
                                    )}
                                    helperText={
                                        !user.email && isEditing
                                            ? 'Pole "Email" nie może być puste.'
                                            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                                                    user.email,
                                                ) && isEditing
                                              ? 'Nieprawidłowy adres email'
                                              : ''
                                    }
                                    color="secondary"
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        },
                                        input: {
                                            readOnly: !isEditing,
                                        },
                                    }}
                                />
                                <TextField
                                    label="Nazwa użytkownika"
                                    name="userName"
                                    value={user.userName}
                                    onChange={handleChange}
                                    fullWidth
                                    error={!user.userName && isEditing}
                                    helperText={
                                        !user.userName && isEditing
                                            ? 'Pole "Nazwa użytkownika" nie może być puste.'
                                            : ''
                                    }
                                    color="secondary"
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        },
                                        input: {
                                            readOnly: !isEditing,
                                        },
                                    }}
                                />
                                <TextField
                                    id="role-select"
                                    select
                                    label="Rola"
                                    name="role"
                                    value={user.role}
                                    onChange={handleChange}
                                    error={!user.role && isEditing}
                                    size={'small'}
                                    helperText={
                                        !user.role && isEditing
                                            ? 'Pole "Rola" nie może być puste.'
                                            : ''
                                    }
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            height: '33px',
                                        },
                                    }}
                                    color="secondary"
                                    disabled={!isEditing}
                                >
                                    <MenuItem value="Sprzedawca">
                                        Sprzedawca
                                    </MenuItem>
                                    <MenuItem value="Kupujący">
                                        Kupujący
                                    </MenuItem>
                                </TextField>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '20px',
                                    gap: '10px',
                                }}
                            >
                                {!isEditing ? (
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={handleEdit}
                                    >
                                        Zacznij edycję
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={handleCancel}
                                        >
                                            Anuluj
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleSave}
                                            disabled={!isFormValid()}
                                        >
                                            Zapisz
                                        </Button>
                                    </>
                                )}
                            </Box>
                        </Card>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
export default Dashboard;
