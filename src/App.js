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
import useStyles from './styles';

import memories from "../src/images/memories.jpg"

const App = () => {
    const classes = useStyles(); 
    return(
        <Container maxWidth={'lg'}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
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
