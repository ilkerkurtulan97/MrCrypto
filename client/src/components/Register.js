import React, { useState } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../styling/Register.css";
import { Navigate } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        MyCrypto
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const URL = "http://localhost:5000/auth/register";
  const [signData, setSignData] = useState({
    name: "",
    surname: "",
    email: "",
    password: ""
  })

  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handle = (e) => {
    const newSignData = {...signData};
    newSignData[e.target.id] = e.target.value;
    setSignData(newSignData);
    console.log(newSignData)
  };

  const handlePasswordConfirm = (e) => {
    const newConfirmPassword = e.target.value
    setPasswordConfirm(newConfirmPassword);
    console.log(newConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signData);

    if(signData.name == null || signData.name === ""){
      toast.error('Name field is empty !', {position: toast.POSITION.TOP_CENTER});
    }
    else if(signData.surname == null || signData.surname === ""){
      toast.error('Surname field is empty!', {position: toast.POSITION.TOP_CENTER});
    }
    else if(signData.email == null || signData.email === ""){
      toast.error('Email field is empty!', {position: toast.POSITION.TOP_CENTER});
    }
    else if(signData.password == null || signData.password === ""){
      toast.error('Password is empty!', {position: toast.POSITION.TOP_CENTER});
    }
    else if(!(signData.password === passwordConfirm)){
      toast.error('Passwords do not match!', {position: toast.POSITION.TOP_CENTER});
    }
    else{
      toast.success('Successful register!', {position: toast.POSITION.TOP_CENTER});
    }

    axios.post(URL, {
      name: signData.name,
      surname: signData.surname,
      email: signData.email,
      password: signData.password
    }).then(res=>{
      console.log(res.data);
      if(res.status === 200){
        Navigate("http://localhost:3000/login", {replace: true});
      }
    })
  };
  
  return (
    <ThemeProvider theme={theme} className="register-main">
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  value={signData.name}
                  onChange={(e)=> handle(e)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="surname"
                  label="Last Name"
                  value={signData.surname}
                  onChange={(e)=> handle(e)}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={signData.email}
                  onChange={(e)=> handle(e)}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={signData.password}
                  onChange={(e)=> handle(e)}
                  type="password"
                  id="password"
                  autoComplete="new-password"

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  value={passwordConfirm}
                  onChange={(e)=> handlePasswordConfirm(e)}
                  autoComplete="new-password"

                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to get update about crypto currency news"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}