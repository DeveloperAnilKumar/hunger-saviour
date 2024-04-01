import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {ExitToApp, Restaurant, Search, ShoppingCart} from "@mui/icons-material";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BASE_URL, navigationLinks} from "./db.jsx";
import {userLogout} from "../redux/slice/authSlice.jsx";


export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const {cartItems} = useSelector((state) => state.cart)
    const {isLogging} = useSelector((state) => state.auth)
    const  dispatch = useDispatch()
const navigate = useNavigate()

    function logout() {
        fetch(BASE_URL + "/auth/logout", {
            method: "POST",
            body: {}
        }).then(res => res.json()).then((data) => console.log(data)).catch((error) => console.log(error))
        dispatch(userLogout())
        navigate("/signin")

    }



    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}> <Link to="signin"> SignIn </Link> </MenuItem>
            <MenuItem onClick={handleMenuClose}> <Link to="signup"> SignUp </Link> </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link to="/cart">
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={cartItems.length === 0 ? "0" : cartItems.length} color="error">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </Link>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="default" sx={{
                backgroundColor: "white"
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>

                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}, color: "#FC8019", fontSize: "1.5rem"}}
                    >
                        Hunger Saviour <Restaurant/>
                    </Typography>

                    <Box sx={{flexGrow: 1}}/>

                    {
                        isLogging === true ? <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                {navigationLinks.map((nav, index) => (
                                    <NavLink key={index} to={nav.path}>

                                        <IconButton size="large" aria-label={`show ${cartItems.length} new mails`}
                                                    color="inherit" sx={{


                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                borderColor: 'none',
                                                color: "#fff",
                                                boxShadow: 'none',
                                                borderRadius: "0px",
                                                border: "0px"
                                            },
                                        }}>
                                            {
                                                nav.text === 'Cart' ?
                                                    <Badge badgeContent={cartItems.length === 0 ? "0" : cartItems.length}
                                                           color="error" sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        color: "#FC8019",

                                                    }}>
                                                        {nav.icon}
                                                    </Badge> :
                                                    <Badge badgeContent={0} color="error" sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        fontSize: "1rem",
                                                        color: "#FC8019"
                                                    }}>

                                                        {nav.icon} <span className="text-slate-800"> {nav.text}</span>
                                                    </Badge>
                                            }
                                        </IconButton>
                                    </NavLink>
                                ))}

                                <IconButton onClick={logout} size="large" aria-label="show 4 new mails" color="inherit"  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "1rem",
                                    color: "#FC8019"
                                }}>
                                    <ExitToApp/> Sign Out
                                </IconButton>

                            </Box>
                            :
                            (<Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{
                                    ":hover": {color: "#FC8019"},
                                    backgroundColor: "white"
                                }}>
                                    <Search/>
                                </IconButton>
                                <Link to="/cart">
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={cartItems.length === 0 ? "0" : cartItems.length}
                                               color="error">
                                            <ShoppingCart/>
                                        </Badge>
                                    </IconButton>
                                </Link>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={"0"} color="error">
                                        <NotificationsIcon/>
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                            </Box>)
                    }

                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {
                renderMobileMenu
            }
            {
                renderMenu
            }
        </Box>
    )
        ;
}


