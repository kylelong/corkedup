import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import '../Signup.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
//TODO: check if already logged in before visiting this page
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function SignUp(props) {
    
    const classes = useStyles();
    const [errors, setErrors] = useState({email: "", password: ""});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect( () => {
        console.log("Errors: ", errors);
    }, [errors])

    const onChange = (e) => {
        const { name } = e.target;
        name === "email" ? setEmail(e.target.value) : setPassword(e.target.value);
    }

    //Email validation
    const validEmail = (email) => {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx) || email.length === 0){
            //setErrors(prevErrors => [...prevErrors, "Email must be valid."]);
            setErrors(prevErrors => ({ ...prevErrors, email: "Email must be valid." }));
            
        }
        return regEx.test(email);
    }
    //Password validation
    const minPasswordLength = (password) => {
        return password.length >= 8;
    }
    const maxPasswordLength = (password) => {
        return password.length < 55;
    }
    const validPassword = (password) => {
        if(!minPasswordLength(password)){
            //setErrors(prevErrors => [...prevErrors, "Password must be at least 8 characters."]);
            setErrors(prevErrors => ({ ...prevErrors, password: "Password must be at least 8 characters." }));
        }
        if(!maxPasswordLength(password)){
            setErrors(prevErrors => ({ ...prevErrors, password: "Password must be at less than 55 characters." }));
            // setErrors(prevErrors => [...prevErrors, "Password must be at less than 55 characters."]);
        }
        return (minPasswordLength(password) && maxPasswordLength(password));
    }

    const clickedButton = (e) => {
        e.preventDefault();
        setErrors({email: "", password: ""});
        console.log(email, " ", password);
        console.log(validEmail(email));
        console.log(validPassword(password));
        //Only go to next if errors.email && errors.password === ""
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
                    <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type="password" onChange={onChange} />
                    {errors.password.length > 0 &&
                       <p className="error">{errors.password}</p>
                    }
                       { (errors.email.length === 0 && errors.password.length === 0 ) ?
                            <Link to="/">
                                <div className="buttons">
                                    <button className="button is-info is-light is-medium is-fullwidth"  onClick={clickedButton}>Continue</button> 
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