import { Button, Container, Paper, TextField, Typography, Avatar, Stack, Box } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [avatar, setAvatar] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });

    const toggleLogin = () => {
        setIsLogin(!isLogin);
        setErrors({ username: '', password: '' }); // Clear errors on toggle
        setUsername('');
        setPassword('');
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const validateInputs = () => {
        let isValid = true;
        let newErrors = { username: '', password: '' };

        if (username.trim().length < 3) {
            newErrors.username = 'Username must be at least 3 characters long.';
            isValid = false;
        }

        if (password.trim().length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateInputs()) {
            alert(isLogin ? 'Logging in...' : 'Registering...');
        }
    };

    const formStyle = {
        width: "100%",
        marginTop: "1rem"
    };

    return (
        <div>
        <Container component="main" maxWidth="xs" sx={{ height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper elevation={8}
                sx={{
                    padding: 4,
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: '100%',
                    gap: 2
                }}>
                {isLogin ? (
                    <>
                        <Typography variant='h4' gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            Login
                        </Typography>
                        <form style={formStyle} onSubmit={handleSubmit}>
                            <TextField
                                required
                                label="Username"
                                fullWidth
                                margin='normal'
                                variant='outlined'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                error={!!errors.username}
                                helperText={errors.username}
                            />
                            <TextField
                                required
                                label="Password"
                                fullWidth
                                type='password'
                                margin='normal'
                                variant='outlined'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <Button
                                fullWidth
                                type="submit"
                                variant='contained'
                                color='primary'
                                sx={{ mt: 2, py: 1.2, fontSize: '1rem' }}>
                                Login
                            </Button>
                            <Typography
                                variant='body1'
                                align='center'
                                sx={{ mt: 2, color: 'text.secondary' }}>
                                OR
                            </Typography>
                            <Button
                                fullWidth
                                variant='text'
                                color='primary'
                                onClick={toggleLogin}
                                sx={{ mt: 1 }}>
                                Sign Up Instead
                            </Button>
                        </form>
                    </>
                ) : (
                    <>
                        <Typography variant='h4' gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            Sign Up
                        </Typography>
                        <Stack direction="column" alignItems="center" spacing={2} sx={{ mb: 2, position: 'relative' }}>
                            <Avatar
                                src={avatar}
                                sx={{
                                    width: 72,
                                    height: 72,
                                    bgcolor: 'secondary.main'
                                }}
                            />
                            <Box sx={{ position: 'absolute', bottom: -12, right: 8 }}>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="avatar-upload"
                                    type="file"
                                    onChange={handleAvatarChange}
                                />
                                <label htmlFor="avatar-upload">
                                    <CameraAltIcon
                                        sx={{
                                            cursor: 'pointer',
                                            fontSize: 24,
                                            color: 'action.active',
                                            bgcolor: 'white',
                                            borderRadius: '40%',
                                            boxShadow: 1,
                                            padding: 1
                                        }}
                                    />
                                </label>
                            </Box>
                        </Stack>

                        <form style={formStyle} onSubmit={handleSubmit}>
                            <TextField
                                required
                                label="Full Name"
                                fullWidth
                                margin='normal'
                                variant='outlined'
                            />
                            <TextField
                                required
                                label="Username"
                                fullWidth
                                type='text'
                                margin='normal'
                                variant='outlined'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                error={!!errors.username}
                                helperText={errors.username}
                            />
                            <TextField
                                required
                                label="Password"
                                fullWidth
                                type='password'
                                margin='normal'
                                variant='outlined'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <Button
                                fullWidth
                                type="submit"
                                variant='contained'
                                color='primary'
                                sx={{ mt: 2, py: 1.2, fontSize: '1rem' }}>
                                Register
                            </Button>
                            <Typography
                                variant='body1'
                                align='center'
                                sx={{ mt: 2, color: 'text.secondary' }}>
                                OR
                            </Typography>
                            <Button
                                fullWidth
                                variant='text'
                                color='primary'
                                onClick={toggleLogin}
                                sx={{ mt: 1 }}>
                                Login Instead
                            </Button>
                        </form>
                    </>
                )}
            </Paper>
        </Container>
        </div>
    );
};

export default Login;
