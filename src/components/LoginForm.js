import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
/*
TODO: Login for email and password.
 Make sure it matches from db before redirecting to profile
*/
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  return (

    <form className={classes.root} noValidate autoComplete="off" id="loginForm">
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <Link to="/profile">
        <div className="buttons">
          <button className="button is-info is-light is-medium is-fullwidth">Login</button>
        </div>
      </Link>
        <Link to="/signup">Don't have an account? Sign up</Link>

    </form>

  );
}
