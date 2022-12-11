import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, ListItem, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div >

            <AppBar position="fixed" sx={{
                background: "black"
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link to="/" style={{
                            textDecoration: "none"
                        }}>
                            <Typography
                                variant="h4"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    paddingLeft: "30px",
                                    paddingRight: "50px",
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.5rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                Bronix Club
                            </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <List onClick={handleCloseNavMenu} sx={{
                                    textAlign: "center"
                                }}>
                                    <Link to="/classes" style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <ListItem>
                                            Classes
                                        </ListItem>
                                    </Link>
                                    <ListItem>
                                        Personal Workouts
                                    </ListItem>
                                    <Link to="/price" style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <ListItem>
                                            Price & Plans
                                        </ListItem>
                                    </Link>
                                    <Link to="/schedule" style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <ListItem>
                                            Schdule
                                        </ListItem>
                                    </Link>
                                </List>
                            </Menu>
                        </Box>
                        <Link to="/" style={{
                            textDecoration: "none",
                            color: "white"
                        }}>
                            <Typography
                                variant="h4"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0.1rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Bronix Club
                            </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link to="/classes" style={{
                                textDecoration: "none",
                            }}>
                                <Button sx={{
                                    color: "white",
                                    "&:hover": {
                                        borderBottom: "1px solid white"
                                    }
                                }}>
                                    Classes
                                </Button>
                            </Link>
                            <Link to="/workout" style={{
                                textDecoration: "none",
                            }}>
                                <Button sx={{
                                    color: "white",
                                    "&:hover": {
                                        borderBottom: "1px solid white"
                                    }
                                }}>
                                    Personal Workouts
                                </Button>
                            </Link>
                            <Link to="/price" style={{
                                textDecoration: "none"
                            }}>
                                <Button sx={{
                                    color: "white",
                                    "&:hover": {
                                        borderBottom: "1px solid white"
                                    }
                                }}>
                                    Price & Plans
                                </Button>
                            </Link>
                            <Link to="/schedule" style={{
                                textDecoration: "none",
                                color: "black"
                            }}>
                                <Button sx={{
                                    color: "white",
                                    "&:hover": {
                                        borderBottom: "1px solid white"
                                    }
                                }}>
                                    Schdule
                                </Button>
                            </Link>
                        </Box>


                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white" }}>
                                    <AccountCircleIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <List onClick={handleCloseUserMenu}>
                                    <Link to="/signup" style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <ListItem textAlign="center">Sign Up</ListItem>
                                    </Link>
                                    <Link to="/signin" style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <ListItem textAlign="center">Sign In</ListItem>
                                    </Link>
                                </List>
                            </Menu>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>

    );
}
export default ResponsiveAppBar;