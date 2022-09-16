import React,{useState,useEffect} from 'react'
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
    Icon,
} from '@mui/material' 
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SettingsIcon from '@mui/icons-material/Settings';
import Person3Icon from '@mui/icons-material/Person3';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import avatar from "./images/Avatar/avartar.jpg"
import ContactMailIcon from '@mui/icons-material/ContactMail';


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
        icon:SettingsIcon,
    },
    {
        id:1,
        name:"Profile",
        link:"/Profile",
        icon:Person3Icon,
    },
    {
        id:2,
        name:"About Us",
        link:"/About",
        icon:Diversity3Icon,
    },
    {
        id:3,
        name:"Contact Us",
        link:"/Contact",
        icon:ContactMailIcon,
    },
]

const App1 = () => {
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
            <Grid
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent:"center",
                    alignItems:"center",
                    // bgcolor:"#7bdcb5",
                    marginRight:5,
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
                        marginRight:5,
                    }}
                >
                    {MenuHeader.map((val,idx)=>{
                        return (
                            <Link 
                            sx={{
                                    height:30,
                                    marginRight:5,
                                    color:"#fcb900",
                                    borderRadius:2,
                                    "&:hover":{
                                        color:"#ff6900"
                                    }
                                }}
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
                        alt="Remy Sharp"
                        src={avatar}
                        sx={{
                            bgcolor:"#fef3bd",
                            width: 56,
                            height: 56,
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
                                    <Link component={"button"} href={`/`}
                                        sx={{
                                            display:'flex',
                                            flexDirection:"row",
                                            alignItems:"center",
                                        }}
                                        underline="none"
                                    >
                                         <Avatar
                                            alt="Remy Sharp"
                                            src={val.icon}
                                            // sx={{
                                            //     bgcolor:"#fef3bd",
                                            //     width: 56,
                                            //     height: 56,
                                            // }}
                                        />
                                        <Typography component="h1" 
                                            sx={{
                                                width:"100%",
                                                py:2,
                                            }}
                                        >
                                            {val.name}
                                        </Typography>
                                    </Link>
                                    <Divider sx={{ my: 1 }} />
                                </>
                            );
                        })}
                    </Grid>
                </Box>
            </Drawer>
        </Box>
    )
}

export default App1