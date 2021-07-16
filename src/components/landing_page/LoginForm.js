import React, { useState } from 'react';
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const { name } = e.target;
    name === "email" ? setEmail(e.target.value) : setPassword(e.target.value);
    //just check db not frontend validation
}
const clickedButton = (e) => {
    //Check db for valid email and password

    //set state to send to profile or send errors messages
}

  return (

    <form className={classes.root} noValidate autoComplete="off" id="loginForm">
      <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" onChange={onChange} />
      <Link to="/home">
        <div className="buttons">
          <button className="button is-info is-light is-medium is-fullwidth" onClick={clickedButton}>Login</button>
        </div>
      </Link>
        <Link to="/signup">Don't have an account? Sign up</Link>

    </form>

  );
}
