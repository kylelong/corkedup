import React, { useState } from 'react';
import Navigation from './Navigation';
import '../styles/Account.css';
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
const Account = () => {
    //Cancel logic from database
    //If no free trial, let them cancel free trial
    //Show X on cancel button
    const classes = useStyles();
    const [email, setEmail] = useState("kylelong9506@gmail.com");
    const [joinDate, setJoinDate] = useState("3/21/2021");
    const [cancel, setCancel] = useState(false);
    const [zipcode, setZipCode] = useState("28226")
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
             <Navigation />
             <div className="accountContainer">
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
                {!canceled &&
                    <div className="buttons">
                        <button className="button is-danger is-light" id="cancel" onClick={handleCancel}>{cancel === true ? "X Cancel Subscription" : "Cancel Subscription"}</button>
                    </div>

                }

                {canceled &&
                     <span style={{color: "green"}}>Subscription successfully canceled.</span>
                }
                {(cancel && !canceled) && 
                        <div className="accountContainer"> 
                            <h3><b>Are you sure?</b></h3>
                            <p>You have 14 days left in your feel trial. Stick around to enjoy it.</p>
                            <p>Otherwise, your account will be deleted in 7 days in case decide to resubscribe.</p>
                            {/* <br /> Until then you may subscribe again, losing your free trial. */}
                            <div className="buttons">
                                <button className="button is-info is-light" name="yes" onClick={handleOptions}>Yes</button>
                                <button className="button is-info is-light" name="no" onClick={handleOptions}>No</button>
                            </div>
                        </div>
                    }
             </div>
        </div>
    );
};

export default Account;