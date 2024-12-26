import { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { styled } from "@mui/material/styles"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
// import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import DashboardIcon from "@mui/icons-material/Dashboard"
import { Box, Button, Menu, MenuItem, Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import './index.css'
import { Dashboard, DashboardOutlined, HomeMax, House, HouseOutlined, Image, Info, InfoOutlined, Settings } from '@mui/icons-material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import logo from '../../Assets/logo.png';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Sidebar = () => {
    const drawerWidth = 240
    const navigate = useNavigate();

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }))

    const Drawer = styled(MuiDrawer, {
        shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
        "& .MuiDrawer-paper": {
            position: "relative",
            whiteSpace: "nowrap",
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: "border-box",
            ...(!open && {
                overflowX: "hidden",
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up("sm")]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }))
    return (
        <>
            <AppBar position='absolute' elevation={0} sx={{ boxShadow: 'none' }}>
                <Toolbar
                    sx={{
                        pr: "24px",
                        backgroundColor: 'white',
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logo} alt="Logo" style={{ width: '35px', height: '35px', marginRight: '8px' }} />
                            <Typography variant='h6' sx={{ color: 'black' }}>
                                Inventory
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
                            <button
                                style={{
                                    backgroundColor: '#FFF2E2',
                                    color: 'black',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '2px 12px',
                                    cursor: 'pointer',
                                    fontSize:'12px'
                                }}
                            >
                                Nanny's Shop <i class="bi bi-chevron-down" style={{ fontSize: '1em', marginRight: '4px'}}></i>
                            </button>
                            <NotificationsIcon sx={{ marginRight: '8px', color:'blue' }} />
                            <Avatar>S</Avatar>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer variant='permanent'>

                <List>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            // height: '100vh',
                            mt: 10
                        }}
                    >
                        <Box>
                            <ListItem 
                            >
                                <ListItemIcon>
                                    <WidgetsOutlinedIcon sx={{ color: 'black !important' }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black !important' }} primary='Home' />
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <Badge badgeContent={3}
                                        sx={{
                                            '& .MuiBadge-badge': {
                                                backgroundColor: '#FFF2E2',
                                                color: 'black',
                                            }
                                        }}>
                                        <ShoppingBagOutlinedIcon sx={{ color: 'black !important' }} />
                                    </Badge>

                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black !important' }} primary='Home' />
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <PeopleOutlineOutlinedIcon sx={{ color: 'black !important' }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black !important' }} primary='Details' />
                            </ListItem>

                            <ListItem key='Dashboard' component={NavLink} to='Dashboard'>
                                <ListItemIcon>
                                    <FolderOpenOutlinedIcon sx={{ color: 'black' }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black !important' }} primary='Setting' />
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <Badge badgeContent={16}
                                        sx={{
                                            '& .MuiBadge-badge': {
                                                backgroundColor: '#FFF2E2',
                                                color: 'black',
                                            }
                                        }}

                                    >
                                        <i class="bi bi-chat-dots fs-4"></i>
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black !important' }} primary='Chat' />
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <SettingsOutlinedIcon sx={{ color: 'black !important' }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black !important' }} primary='Settings' />
                            </ListItem>
                        </Box>

                        <Box sx={{ mt: 26 }}>
                            <ListItem key='Headphone' >
                                <ListItemIcon>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 35,
                                            height: 35,
                                            borderRadius: '25%',
                                            backgroundColor: '#5E63661A',
                                            // boxShadow: 2,
                                        }}
                                    >

                                        <HeadphonesOutlinedIcon sx={{ color: 'black !important' }} />
                                    </Box>
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black !important' }} primary='Headphone' />
                            </ListItem>
                            <ListItem key='Gift' >
                                <ListItemIcon>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 35,
                                            height: 35,
                                            borderRadius: '25%',
                                            backgroundColor: '#FFF2E2',
                                            // boxShadow: 1,
                                        }}
                                    >

                                        <CardGiftcardOutlinedIcon sx={{ color: 'black !important' }} />
                                    </Box>
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black !important' }} primary='Gift' />
                            </ListItem>
                            <ListItem key='Logout' >
                                <ListItemIcon>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 30,
                                            height: 30,
                                            borderRadius: '25%',
                                            backgroundColor: '#EBBFBF',
                                        }}
                                    >

                                     <i class="bi bi-box-arrow-right"></i>
                                    </Box>
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black !important' }} primary='Logout' />
                            </ListItem>
                        </Box>
                    </Box>
                </List>
            </Drawer>
        </>
    )
}

export default Sidebar
