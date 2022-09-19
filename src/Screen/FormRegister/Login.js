import React,{useState} from 'react'
import {
    Box,
    IconButton,
    InputAdornment,
    TextField,
    Grid,
    Container,
    Paper,
    Button
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

import imgs from "../../images/ee.jpg"

import axios from "axios";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    // 2 func như nhau
    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };
    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://reqres.in/api/login",{
            email: values.email,
            password: values.password
        })
        .then(res=>{
            console.log(res);
            if (res.status === 200) {
                localStorage.setItem("token",res.data.token);
                navigate("/home");
            }
        })
        .catch(err=>console.error(`login error: ${err}`))
      };

    return (
        <Box 
            sx={{
                height:"100vh",
                // backgroundColor:"rebeccapurple"
                backgroundImage: `url(${imgs})`
            }}
        >
            <Container maxWidth="sm">
                <Grid container 
                spacing={2}
                direction="column"
                justifyContent="center"
                style={{
                    minHeight:"100vh",
                }}>
                    <Paper
                    elevation={2} 
                    sx={{
                        padding:5,
                        borderRadius:8,
                    }}>
                        <Grid 
                        container
                        direction="column"
                        spacing={2}
                        >
                            <Grid item>
                                <TextField
                                type={"email"}
                                fullWidth
                                label="Enter your email"
                                placeholder="Email address"
                                variant='outlined'
                                required
                                onChange={(e)=> setValues({...values,email:e.target.value})}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                type={ values.showPassword ? "text": "password"}
                                fullWidth
                                label="Enter your password"
                                placeholder="Password"
                                variant='outlined'
                                InputProps={{
                                    endAdornment:(
                                        <InputAdornment position='end'>
                                            <IconButton 
                                            onClick={handleClickShowPassword}
                                            aria-label='toggle password'
                                            edge="end">
                                                {
                                                    values.showPassword ? (
                                                        <Visibility/>
                                                    ): (
                                                        <VisibilityOff/>
                                                    )
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                required
                                onChange={(e)=> setValues({...values,password:e.target.value})}
                                />
                                
                            </Grid>
                            <Grid item>
                                <Button onClick={handleSubmit} fullWidth variant="contained">Sign In</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </Box>
    )
}

export default Login