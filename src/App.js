import React from 'react'
import {
    Container,
    AppBar,
    Typography,
    Grow,
    Grid,
} from "@material-ui/core"

import Posts from './component/Posts/Posts';
import Form from './component/Form/Form';

import memories from "../src/images/memories.jpg"

const App = () => {
    return(
        <Container maxWidth={'lg'}>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Memories</Typography>
                <img src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
