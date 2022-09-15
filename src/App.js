import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Posts from './component/Posts/Posts';
import Form from './component/Form/Form';
// import useStyles from './styles';

import {
    AppBar,
    Container,
    Typography,
    Box,
    Grid,
    GridSpacing,
    Grow,
    Button,
    Link
} from "@mui/material"

import memories from "../src/images/memories.jpg"

const App = () => {
    // const classes = useStyles(); 
    return(
        <Container style={{
            // backgroundColor:'red',
        }}> 
            <Box 
                p={2}
                sx={{
                    position:"static",
                    height: 50,
                    bgcolor: "blueviolet",
                    width: "100%",
                    display:"flex",
                    
                    alignItems:"center",
                }}>
                    <Grid
                        sx={{
                            bgcolor:"#fccb00",
                            // padding: 2,
                            display:"flex",
                            justifyContent : "space-between",
                        
                        }}
                    >
                        <Link
                            sx={{
                                display:"flex",
                                justifyContent : "space-between",
                            }}
                            underline='none'
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                            >
                            Button 1
                        </Link>
                        <Link
                            underline='none'
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                            >
                            Button 2
                            </Link>
                    </Grid>
            </Box>
        </Container>
    )
}

export default App;
