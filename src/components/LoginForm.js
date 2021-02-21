import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
      <div className="buttons">
        <button className="button is-info is-light is-medium is-fullwidth">Login</button>
        <a href="">Already have an account? Sign in</a>
      </div>
    </form>
  );
}
