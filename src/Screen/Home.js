import React,{useState,useEffect} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
    Typography,
    Container,
    Box,
    Grid,
    Drawer,
    IconButton,
    Avatar,
    MenuList,
    MenuItem,
    Link,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Icon,
} from '@mui/material' 
import MenuIcon from '@mui/icons-material/Menu';
import avartar from "../images/Avatar/avartar.jpg"

import {user, settings,support,audience} from "../images/Icon"
import { minWidth } from '@mui/system';

export const MenuHeader = [
    {
        id:0,
        name:"Home",
        link:"/",
    },
    {
        id:0,
        name:"Home1",
        link:"/1",
    },
    {
        id:0,
        name:"Home2",
        link:"/2",
    },
    {
        id:0,
        name:"Home3",
        link:"/3",
    },
]
export const MenuDrawer = [
    {
        id:0,
        name:"Setting",
        link:"/Setting",
        icon:settings,
    },
    {
        id:1,
        name:"Profile",
        link:"/Profile",
        icon:user,
    },
    {
        id:2,
        name:"About Us",
        link:"/About",
        icon:audience,
    },
    {
        id:3,
        name:"Contact Us",
        link:"/Contact",
        icon:support,
    },
]

const Home = () => {
    const [open,setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Box aria-label='hid'
            sx={{
                bgcolor:"#3f51b5",
                display: 'flex',
                height:60,
                justifyContent:"space-between"
            }}
        >
            <Grid sx={{
                flex:1,
                display: 'flex',
                alignItems:"center",
            }}>
                <IconButton
                    edge="end"
                    color="default"
                    aria-label="open drawer"
                        onClick={toggleDrawer}
                    sx={{
                        marginLeft: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </Grid>
            <Grid
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent:"center",
                    alignItems:"center",
                    // bgcolor:"#7bdcb5",
                    marginRight:4,
                    ...(open && {
                        display: 'flex',
                        position: 'relative',
                    })
                }}
            >
                <MenuList 
                    sx={{
                        height:30,
                        // bgcolor:"#fcb900",
                        display:'flex',
                        flexDirection:"row",
                        alignItems: 'center',
                        marginRight:1,
                    }}
                >
                    {MenuHeader.map((val,idx)=>{
                        return (
                            <Link 
                                sx={{
                                    height:30,
                                    marginRight:3,
                                    color:"#fcb900",
                                    borderRadius:2,
                                    "&:hover":{
                                        color:"#ff6900"
                                    }
                                }}
                                key={idx}
                                href={`${val.link}`}
                                component={"a"}
                                underline="none">
                                    {val.name}
                            </Link>
                        )})
                    }
                </MenuList>
                <Link component={"button"} href={`/`}>
                    <Avatar
                        src={avartar}
                        sx={{
                            width: 40,
                            height: 40,
                        }}
                    />
                </Link>
            </Grid>
            <Drawer open={open} onClose={toggleDrawer}>
                <Box sx={{width:250,}}>
                    <Grid 
                        sx={{
                            // bgcolor:"#ff9800",
                            // marginLeft:"20px",
                            width:"100%",
                            // display:"flex",
                            paddingX:2,
                            alignItems:"center"
                        }}
                    >
                        {MenuDrawer.map((val,idx)=>{
                            return(
                                <>
                                    <Link component={"a"} href={`${val.link}`}
                                        sx={{
                                            display:'flex',
                                            flexDirection:"row",
                                            alignItems:"center",
                                        }}
                                        underline="none"
                                    >
                                        <img style={{
                                            height:20,
                                            width:20,
                                            marginRight:10,
                                        }} src={`${val.icon}`} alt={`${idx}`} />
                                        <Typography component="h1" 
                                            sx={{
                                                width:"100%",
                                                py:2,
                                                color:"#000"
                                            }}
                                        >
                                            {val.name}
                                        </Typography>
                                    </Link>
                                    
                                    {/* <ListItem key={idx} component={"a"} to={val.link}>
                                        <ListItemIcon sx={{
                                            // bgcolor:"red",
                                            minWidth:30,
                                        }}>
                                            <img style={{
                                                height:20,
                                                width:20,
                                                // marginRight:2,
                                            }} src={`${val.icon}`} alt={`${idx}`} />
                                        </ListItemIcon>
                                        <ListItemText primary={val.name} />
                                    </ListItem> */}
                                    <Divider /> 
                                </>
                            );
                        })}
                    </Grid>
                </Box>
            </Drawer>
        </Box>
    )
}

export default Home