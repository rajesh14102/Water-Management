import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Container,
    CssBaseline,
    Avatar,
    Link,
    Stack,
} from '@mui/material';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0288d1',
        },
        secondary: {
            main: '#03a9f4',
        },
    },
    typography: {
        fontFamily: "'Courier New', Courier, monospace",
    },
});

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userId === 'admin' && password === 'admin') {
            setError('');
            localStorage.setItem('username', userId);
            toast.success(`${userId} logged in successfully!`, {
                position: 'top-right',
                autoClose: 2000,
                style: { fontFamily: "'Courier New', Courier, monospace", fontWeight: "bold" },
            });
            setTimeout(() => navigate('/gis-map'), 3000);
        } else {
            setError('Invalid User ID or Password');
            toast.error('Login Failed: Invalid credentials.', {
                position: 'top-right',
                autoClose: 3000,
                style: { fontFamily: "'Courier New', Courier, monospace", fontWeight: "bold" },
            });
        }
    };

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
        setError('');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#e1f5fe',
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <WaterDropIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ color: '#01579b', fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold' }}>
                        SCADA LOGIN
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userId"
                            label="User ID"
                            name="userId"
                            value={userId}
                            onChange={handleInputChange(setUserId)}
                            autoFocus
                            sx={{ backgroundColor: 'white', borderRadius: 1, fontFamily: "'Courier New', Courier, monospace" }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handleInputChange(setPassword)}
                            sx={{ backgroundColor: 'white', borderRadius: 1, fontFamily: "'Courier New', Courier, monospace" }}
                        />
                        {error && (
                            <Typography color="error" variant="body2" sx={{ mt: 1, fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold' }}>
                                {error}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: 'primary.main',
                                ':hover': { backgroundColor: 'primary.dark' },
                                fontFamily: "'Courier New', Courier, monospace",
                                fontWeight: 'bold',
                            }}
                        >
                            Sign In
                        </Button>
                        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2, fontWeight: 'bold' }}>
                            <Link
                                href="#"
                                variant="body2"
                                sx={{
                                    color: '#0288d1',
                                    fontFamily: "'Courier New', Courier, monospace",
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                }}
                            >
                                Forgot password?
                            </Link>
                            <span style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold', margin: '0 10px' }}>|</span>
                            <Link
                                href="#"
                                variant="body2"
                                sx={{
                                    color: '#0288d1',
                                    fontFamily: "'Courier New', Courier, monospace",
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                }}
                            >
                                Don't have an account? Sign Up
                            </Link>
                        </Stack>
                    </Box>
                </Box>
                <ToastContainer />
            </Container>
        </ThemeProvider>
    );
};

export default Login;
