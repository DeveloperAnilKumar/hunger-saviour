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
import {ExitToApp, Lock, Person, Restaurant, Search, ShoppingCart} from "@mui/icons-material";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BASE_URL, navigationLinks} from "./db.jsx";
import {userLogout} from "../redux/slice/authSlice.jsx";
import Avatar from "@mui/material/Avatar";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";


export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const [drawerOpen, setDrawerOpen] = useState(false);


    const {cartItems} = useSelector((state) => state.cart)
    const {isLogging, user} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    function logout() {
        fetch(BASE_URL + "/auth/logout", {
            method: "POST",
            body: {}
        }).then(res => res.json()).then((data) => console.log(data)).catch((error) => console.log(error))
        dispatch(userLogout())
        handleMenuClose()
        navigate("/signin")


    }



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



    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
        >
            {isLogging ? (
                [
                    <MenuItem key="profile" onClick={handleMenuClose} component={Link} to="/profile">
                        <Person sx={{ marginRight: 1 }} /> Profile
                    </MenuItem>,
                    <MenuItem key="signout" onClick={logout}>
                        <ExitToApp sx={{ marginRight: 1 }} /> Sign Out
                    </MenuItem>
                ]
            ) : (
                [
                    <MenuItem key="signin" onClick={handleMenuClose} component={Link} to="/signin">
                        <Lock sx={{ marginRight: 1 }} /> Sign In
                    </MenuItem>,
                    <MenuItem key="signup" onClick={handleMenuClose} component={Link} to="/signup">
                        <Person sx={{ marginRight: 1 }} /> Sign Up
                    </MenuItem>
                ]
            )}
        </Menu>
    );




    const drawerContent = (
        <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerClose}>
            <List>
                {
                    isLogging &&
                        navigationLinks.map((nav, index) => (
                            <ListItem key={index} disablePadding component={NavLink} to={nav.path}

                            >
                                <ListItemButton   >
                                    <ListItemIcon  sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "1rem",
                                        color: "#FC8019"
                                    }}>
                                        {nav.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={nav.text} />
                                </ListItemButton>
                            </ListItem>
                        ))
                }
            </List>

            <List>
                {isLogging ? (
                    <>
                        <ListItem  component={Link} to="/profile">
                            <ListItemIcon>
                                <Avatar src={user.image}  sx={{ width: 24, height: 24 }} />
                            </ListItemIcon>
                            <ListItemText sx={{
                                textTransform:"capitalize"
                            }} primary= {`${user.firstName} ${user.lastName}`} />
                        </ListItem>
                        <ListItem  onClick={logout}>
                            <ListItemIcon>
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText primary="Sign Out" />
                        </ListItem>
                    </>
                ) : (
                    <>
                        <ListItem  component={Link} to="/signin">
                            <ListItemIcon>
                                <Lock />
                            </ListItemIcon>
                            <ListItemText primary="Sign In" />
                        </ListItem>
                        <ListItem  component={Link} to="/signup">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Sign Up" />
                        </ListItem>
                    </>
                )}
            </List>
        </Box>
    );



    const isMobileSize = "md"

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
                        onClick={handleDrawerOpen}
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



                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "1rem",
                                        color: "#FC8019"
                                    }}>

                                    <Avatar src={user.image}  sx={{ width: 24, height: 24 }} /> <span className="text-slate-800 mx-1 capitalize">  {user.firstName} {user.lastName} </span>
                                </IconButton>

                            </Box>
                            :
                            (<Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                fontSize: "1rem",
                                                color: "#FC8019"
                                            }}>

                                    <Search/>
                                </IconButton>
                                <Link to="/signin">
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit"

                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: "1rem",
                                                    color: "#FC8019"
                                                }}>

                                        <Badge badgeContent={"0"}
                                               color="error">
                                            <ShoppingCart/>
                                        </Badge>
                                    </IconButton>
                                </Link>

                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "1rem",
                                        color: "#FC8019"
                                    }}>

                                    <AccountCircle/> <span className="text-slate-800 capitalize mx-2">user </span>
                                </IconButton>
                            </Box>)
                    }


                </Toolbar>
            </AppBar>

            {
                renderMenu
            }

            <Drawer anchor="left" open={isMobileSize && drawerOpen} onClose={handleDrawerClose}>
                {drawerContent}
            </Drawer>
        </Box>
    )
        ;
}


