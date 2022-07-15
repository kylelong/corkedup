import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import '../styles/Signup.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import gql from 'graphql-tag';
import { useMutation } from "@apollo/client";
import { useForm } from '../util/hooks'
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
   
    const [errors, setErrors] = useState({});

    const {onChange, onSubmit, values } = useForm(registerUser, {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, result){
            props.history.push('/bars');
        },
        onError(err){
            if(err){
                setErrors(err.graphQLErrors[0].extensions.errors);
            }
        },
        variables: values
    });

    function registerUser(){
        addUser();
    }

    const [showPassword, setShowPassword] = useState(false);

    const clickedShowPassword = () => {
        setShowPassword(showPassword => !showPassword);
    }

    return (
        <div className="main">
            <div className="container">
                <Logo />
                <h3>Welcome to Corked Up. Create your account.</h3>
                
                <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off" id="signupForm">
                <TextField id="outlined-basic" label="First Name" variant="outlined" name="firstName" onChange={onChange} />
                {   errors.hasOwnProperty("firstName") &&
                       <p className="error">{errors.firstName}</p>
                }
                <TextField id="outlined-basic" label="Last Name" variant="outlined" name="lastName" onChange={onChange} />
                {   errors.hasOwnProperty("lastName") &&
                       <p className="error">{errors.lastName}</p>
                }
                <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
                {   errors.hasOwnProperty("email") &&
                       <p className="error">{errors.email}</p>
                }
                <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type={showPassword ? "text" : "password"} onChange={onChange} />

                {   errors.hasOwnProperty("password") &&
                       <p className="error">{errors.password}</p>
                }
                    <span>
                        <Checkbox onClick={clickedShowPassword}/> Show password
                    </span>

                    <div className="buttons">
                        <button className="button is-info is-light is-medium is-fullwidth" type="submit">Login</button> 
                    </div>
                       
                    <Link to="/">Already an account? Sign in</Link>
                </form>

            </div>
        </div>

    );
}

const REGISTER_USER = gql`
 mutation register(
     $firstName: String!
     $lastName: String!
     $email: String!
     $password: String!
 ) {
     register(
         registerInput: {
             firstName: $firstName
             lastName: $lastName
             email: $email
             password: $password
         }
     ){
         id email token firstName lastName createdAt
     }
 }
`;

export default SignUp;