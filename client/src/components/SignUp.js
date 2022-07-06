import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import '../styles/Signup.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
//TODO: check if already logged in before visiting this page
//make sure user exists in db before redirectin to home
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const label = { inputProps: { 'aria-label': 'Show' } }

function SignUp(props) {
    
    const classes = useStyles();
   
    const [errors, setErrors] = useState({email: "", password: ""});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (e) => {
        const { name } = e.target;
        name === "email" ? setEmail(e.target.value) : setPassword(e.target.value);
        validEmail(email);
        validPassword(password);
    }

    const clickedShowPassword = () =>{
        setShowPassword(showPassword => !showPassword);
    }

    //Email validation
    const validEmail = (email) => {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            setErrors(prevErrors => ({ ...prevErrors, email: "Email must be valid." }));
        } else{
            setErrors(prevErrors => ({ ...prevErrors, email: "" }));
        }
        return regEx.test(email);
    }
    //Password validation
    const minPasswordLength = (password) => {
        return password.length < 7;
    }
    const maxPasswordLength = (password) => {
        return password.length < 55;
    }
    const validPassword = (password) => {
        if(minPasswordLength(password)){
            setErrors(prevErrors => ({ ...prevErrors, password: "Password must be at least 8 characters." }));
        }
        else if(!maxPasswordLength(password)){
            setErrors(prevErrors => ({ ...prevErrors, password: "Password must be at less than 55 characters." }));
        } else{
            setErrors(prevErrors => ({ ...prevErrors, password: "" }));
        }
        return (!minPasswordLength(password) && maxPasswordLength(password));
    }
    //Clicked "Continue"
    const clickedButton = (e) => {
        if(validEmail(email)){
            setErrors(prevErrors => ({ ...prevErrors, email: "" }));
        }
        if(validPassword(password)){
            setErrors(prevErrors => ({ ...prevErrors, password: "" }));
        }
        if(!validEmail(email) || !validPassword(password)){
            e.preventDefault();
        }
    }
    return (
        <div className="main">
            <div className="container">
                <Logo />
                <h3>Welcome to Corked Up. Create your account.</h3>
                
                <form className={classes.root} noValidate autoComplete="off" id="signupForm">
                    <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
                    {errors.email.length > 0 &&
                       <p className="error">{errors.email}</p>
                    }
                    <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type={showPassword ? "text" : "password"} onChange={onChange} />
                    <span>
                    <Checkbox onClick={clickedShowPassword}/> Show password
                    </span>
                    {(errors.password.length > 0) &&
                       <p className="error">{errors.password}</p>
                    }
                       { (errors.email.length === 0 && errors.password.length === 0) ?
                            <Link to="/bars">
                                <div className="buttons">
                                    <button className="button is-info is-light is-medium is-fullwidth" onClick={clickedButton}>Continue</button> 
                                </div>
                            </Link>
                            :
                            <div className="buttons">
                                <button className="button is-info is-light is-medium is-fullwidth"  onClick={clickedButton}>Continue</button> 
                            </div>
                       }
                    <Link to="/">Already an account? Sign in</Link>
                </form>
            </div>
        </div>

    );
}

export default SignUp;