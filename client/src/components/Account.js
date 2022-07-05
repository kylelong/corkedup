import React, { useState } from 'react';
import '../styles/Account.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Navigation from './Navigation';
import SideMenu from './SideMenu';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const Account = () => {
    //Cancel boolean logic from database
    //If no free trial, let them cancel free trial
    //Show X on cancel button
    /**
     * 
     * If they cancelled and 7 days are not up: show x days until account deletion and add cc info
     * 
     */
    const classes = useStyles();
    const [email, setEmail] = useState("kylelong9506@gmail.com");
    const [joinDate, setJoinDate] = useState("3/21/2021");
    const [cancel, setCancel] = useState(false);
    const [zipcode, setZipCode] = useState("94109")
    const [errors, setErrors] = useState({zipcode: ""});
    const [zipCodeSave, setZipCodeSave] = useState(false);
    const [canceled, setCanceled] = useState(false);
    const handleCancel = () => {
        setCancel(!cancel);
    }
    const handleOptions = (e) => {
        const { name } = e.target;
        if(name === "no"){
            setCancel(false);
        } else if(name == "yes"){
            //Cancel subscription : update user status to canceled
            //Set 30 to delete account, do by hand if it is too taxing technically at first
            setCancel(false);
            setCanceled(true);
        }
    }
    const onChange = (e) => {
        const { name, value } = e.target;
        setZipCodeSave(false);
        if(name === "zipcode"){
            if(value.length  === 5){
                const regEx = /^[0-9]{5}$/;
                if(value.match(regEx)){
                    console.log(value);
                    setZipCode(value);
                    setErrors(prevErrors => ({ ...prevErrors, zipcode: "" }));
                }
                else{
                    setErrors(prevErrors => ({ ...prevErrors, zipcode: "Zipcode must be 5 digits" }));
                }
            }
        }
    }
    const updateZipcode = (e) => {
        //update zipcode
        e.preventDefault();
        if(errors.zipcode.length === 0){
            console.log(zipcode);
            //update zipcode on backend
            setZipCodeSave(true);
        }

    }
    return (
        <div>
             <div className="accountContainer">
             <Navigation />
                    <SideMenu />
                 <h3 className="header">Account Information</h3>
                 <p>Email: {email}</p>
                 <p>Member since: {joinDate}</p>
                 <form className={classes.root} noValidate autoComplete="off" id="loginForm">
                 <label htmlFor="zipcode">Zipcode</label>
                    <TextField id="outlined-basic" label={zipcode} variant="outlined" name="zipcode" id="zipcode" placeholder={zipcode}  inputProps={{ maxLength:5 }} onChange={onChange} />
                    {(errors.zipcode.length > 0) &&
                       <p className="error">{errors.zipcode}</p>
                    }
                    <div className="buttons">
                        <button className="button is-info is-light is-medium is-fullwidth" onClick={updateZipcode}>Update</button>
                    </div>
                    {zipCodeSave &&
                        <span style={{color: "green"}}>Zip Code successfully saved.</span>
                    }
            
                </form>
               
             </div>
        </div>
    );
};

export default Account;