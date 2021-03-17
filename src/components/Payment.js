import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import '../styles/Payment.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
/** 
 * check for valid access code. Access code is correct or not, no empty
 * Errors with blank content in all boxes then submit valid code
 * If accesscode is valid disregard an cc info
 *  Proceed if accesscode is valid or no errors and everything is filled
 * if accesscode is corrent or (every field other than accesscode is valid and no errors)
 */
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
function Payment(props) {

    const classes = useStyles();
    const [cardNumber, setCardNumber] = useState("");
    const [card, setCard] = useState("");
    const [fullName, setFullName] = useState("");
    const [accessCode, setAccessCode] = useState("");
    const [expDate, setExpDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [errors, setErrors] = useState({
        accessCode: "",
        cardNumber: "",
        fullName: "",
        accessCode: "",
        expDate: "",
        cvv: ""
    });

    const validName = (name) => {
        return name.length > 0 && name.length < 55;
    }
    const validCode = (code) => {
        return code === "kU3G4VpNFR";
    }
    const validCard = (card) => {
        const regEx = /^[0-9]{16}$/;
        return regEx.test(card);
    }

    const validCVV = (cvv) => {
        // 3,4 digit number
        const regEx = /^[0-9]{3,4}$/;
        return regEx.test(cvv);
    }

    const validDate = (date) => {
        // MM/YY
        const regEx = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        return regEx.test(date);
    }
    const validPayment = () => {
        return validName(fullName) && validCVV(cvv) && validDate(expDate) && validCard(card);
    }

    const containsErrors = () => {
        for(let error in errors){
            if(errors[error].length > 0){
                return true;
            }
        }
        return false;
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        if(name === "accessCode"){
            setAccessCode(value);
        }
        if(name === "cardNumber"){
            setCardNumber(value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim());
            let card = value.replace(/\s/g, "");
            setCard(card);
            if(!validCard(card)){
                setErrors(prevErrors => ({ ...prevErrors, cardNumber: "Card number must be 16 digits." }));
            } else{
                setErrors(prevErrors => ({ ...prevErrors, cardNumber: "" }));
            }
        }
        if(name === "fullName"){
            setFullName(value);
            if(value.length > 55){
                setErrors(prevErrors => ({ ...prevErrors, fullName: "Name must be less than 55 characters." }));
            } else{
                setErrors(prevErrors => ({ ...prevErrors, fullName: "" }));
            }
        }
        if(name === "expDate"){
            setExpDate(value);
            if(!validDate(value)){
                setErrors(prevErrors => ({ ...prevErrors, expDate: "Must be a valid date in the format MM/YY." }));
            } else{
                setErrors(prevErrors => ({ ...prevErrors, expDate: "" }));
            }
        }
        if(name === "cvv"){
            setCVV(value);
            if(!validCVV(value)){
                setErrors(prevErrors => ({ ...prevErrors, cvv: "CVV must be a 3 or 4 digit number." }));
            } else{
                setErrors(prevErrors => ({ ...prevErrors, cvv: "" }));
            }
        }

    }

    const clickedButton = (e) => {
        // console.log("Payment: ", validPayment(), "code: ", accessCode.length > 0 && validCode(accessCode));
        //kU3G4VpNFR
        // console.log( ( (accessCode.length > 0 && validCode(accessCode)) || validPayment() ));

        if(accessCode.length > 0 && !validCode(accessCode)){
            e.preventDefault();
        }

        if(!validPayment() && !(accessCode.length > 0)){
            e.preventDefault();
        }


        //Check for blank
        if(accessCode.length > 0){
            if(!validCode(accessCode)){
                setErrors(prevErrors => ({ ...prevErrors, accessCode: "Invalid access code." }));
            }
        } else{
            if(fullName.length  === 0){
                setErrors(prevErrors => ({ ...prevErrors, fullName: "Name can't be empty." }));
            } else if(fullName.length > 55){
                setErrors(prevErrors => ({ ...prevErrors, fullName: "Name must be less than 55 characters." }));
            } else{
                setErrors(prevErrors => ({ ...prevErrors, fullName: "" }));
            }
    
            if(cardNumber.length === 0){
                setErrors(prevErrors => ({ ...prevErrors, cardNumber: "Card number can't be empty." }));
            } else if(!validCard(card)){
                setErrors(prevErrors => ({ ...prevErrors, cardNumber: "Card number must be 16 digits." }));
            } else{
                setErrors(prevErrors => ({ ...prevErrors, cardNumber: "" }));
            }
    
            if(expDate.length === 0){
                setErrors(prevErrors => ({ ...prevErrors, expDate: "Expiration date can't be empty." }));
            } else if(!validDate(expDate)){
                setErrors(prevErrors => ({ ...prevErrors, expDate: "Must be a valid date in the format MM/YY." }));
            } else{
                setErrors(prevErrors => ({ ...prevErrors, expDate: "" }));
            }
    
            if(cvv.length === 0){
                setErrors(prevErrors => ({ ...prevErrors, cvv: "Security code can't be empty." }));
            }  else if(!validCVV(cvv)){
                setErrors(prevErrors => ({ ...prevErrors, cvv: "CVV must be a 3 or 4 digit number." }));
            } else{
                setErrors(prevErrors => ({ ...prevErrors, cvv: "" }));
            }
        }
    
        /*
        if access code is valid and cc info is entered, ignore cc infor
        */
    }

    return (
        <div className="main2">
            <div className="container2">
                <Logo />
                <h3 id="instruction"><b>Almost there! Enter your payment information to start enjoying Corked Up. Enjoy your 14 day trial now!</b></h3>
                <p id="cost">After your 14 day trial, Corked Up is $5 per month.</p>
                <form className={classes.root} noValidate autoComplete="off" id="signupForm">
                     <TextField id="outlined-basic" label="Access Code" variant="outlined" name="accessCode" onChange={onChange} />
                     { (errors.accessCode.length > 0) &&
                       <p className="error">{errors.accessCode}</p>
                    }

                    <span style={{textAlign: "center"}}> or </span>

                    <TextField id="outlined-basic" label="Name On Card" variant="outlined" name="fullName" placeholder="John Doe" onChange={onChange} />
                    { (errors.fullName.length > 0) &&
                       <p className="error">{errors.fullName}</p>
                    }

                    <TextField id="outlined-basic" label="Card Number" variant="outlined" name="cardNumber" placeholder="XXXX XXXX XXXX XXXX" value={cardNumber} inputProps={{ maxLength:19 }} onChange={onChange} />
                    { (errors.cardNumber.length > 0) &&
                       <p className="error">{errors.cardNumber}</p>
                    }

                    <TextField id="outlined-basic" label="Expiration Date" variant="outlined" name="expDate" placeholder="MM/YY" inputProps={{ maxLength:5 }} onChange={onChange} />
                    { (errors.expDate.length > 0) &&
                       <p className="error">{errors.expDate}</p>
                    }

                    <TextField id="outlined-basic" label="Security Code" variant="outlined" name="cvv" placeholder="***" inputProps={{ maxLength:4 }} onChange={onChange} />
                    {(errors.cvv.length > 0)&&
                       <p className="error">{errors.cvv}</p>
                    }
                 
                 { ((accessCode.length > 0 && validCode(accessCode)) || validPayment() )  ?
                            <Link to="/home">
                                <div className="buttons">
                                    <button className="button is-info is-light is-medium is-fullwidth" onClick={clickedButton}>Submit</button> 
                                </div>
                            </Link>
                            :
                            <div className="buttons">
                                <button className="button is-info is-light is-medium is-fullwidth"  onClick={clickedButton}>Submit</button> 
                            </div>
                       }
                       
                    <Link to="/">Already an account? Sign in</Link>
                </form>
            </div>
        </div>
    );
}

export default Payment;