import {
    alpha,
    AppBar,
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    Icon,
    IconButton,
    InputBase,
    MenuItem,
    styled,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const Header = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // MUST BE TAKEN FROM STORE
    const isAuth = false;

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(2, 1, 2, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Link to={'/'}>
                        <ButtonGroup
                            sx={{
                                display: 'flex',
                                gap: 1,
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <Avatar
                                alt={'Zirka'}
                                src={'../../../public/sticker.webp'}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    display: { md: 'block', xs: 'none' },
                                    mr: 2,
                                    fontWeight: 700,
                                    letterSpacing: '.2rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Zirka
                                <br />
                                Marketplace
                            </Typography>
                        </ButtonGroup>
                    </Link>
                    <Button
                        variant="outlined"
                        color="secondary"
                        sx={{
                            borderRadius: 4,
                            color: '#FFFFFF',
                        }}
                    >
                        Kategorie
                    </Button>
                    <Search sx={{ flexGrow: 1 }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ width: 100 }} />
                    <Link to={'/cart'}>
                        <IconButton aria-label="cart" size="large">
                            <ShoppingCartIcon fontSize="inherit" />
                        </IconButton>
                    </Link>
                    <Link to={'/register'}>
                        <IconButton aria-label="profile" size="large">
                            <PersonIcon fontSize="inherit" />
                        </IconButton>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
