import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, ListItem, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
                                    <ListItem>
                                        Classes
                                    </ListItem>
                                    <ListItem>
                                        Personal Workouts
                                    </ListItem>
                                    <ListItem>
                                        Price & Plans
                                    </ListItem>
                                    <ListItem>
                                        Schdule
                                    </ListItem>
                                </List>
                            </Menu>
                        </Box>
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
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button sx={{
                                color: "white",
                                "&:hover": {
                                    borderBottom: "1px solid white"
                                }
                            }}>
                                Classes
                            </Button>
                            <Button sx={{
                                color: "white",
                                "&:hover": {
                                    borderBottom: "1px solid white"
                                }
                            }}>
                                Personal Workouts
                            </Button>
                            <Button sx={{
                                color: "white",
                                "&:hover": {
                                    borderBottom: "1px solid white"
                                }
                            }}>
                                Price & Plans
                            </Button>
                            <Button sx={{
                                color: "white",
                                "&:hover": {
                                    borderBottom: "1px solid white"
                                }
                            }}>
                                Schdule
                            </Button>
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
                                    <ListItem textAlign="center">Sign Up</ListItem>
                                    <ListItem textAlign="center">Sign In</ListItem>
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