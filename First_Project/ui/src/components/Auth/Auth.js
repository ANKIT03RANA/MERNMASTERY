import React from 'react';
import { Typography, Paper, Grid, Avatar, Button, Container } from "@material-ui/core";
import useStyles from "./styles.js"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined.js"

function Auth() {
    const classes = useStyles();
    const isSignUp=false;
  return (
    <Container component="main" maxWidth="xs" >
        <Paper className={classes.paper} elevation={3} >
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5'>{isSignUp?'Sign Up':'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}></form>
        </Paper>
    </Container>
  )
}

export default Auth
