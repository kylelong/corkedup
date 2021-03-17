import React from 'react';
import Navigation from './Navigation';
const Account = () => {
    //If no free trial, let them cancel free trial
    return (
        <div>
             <Navigation />
             <div>
                 <h3>Account Information</h3>
                 <p>Name: Kyle Long</p>
                 <p>Member since: 3/17/2021</p>
             </div>
        </div>
    );
};

export default Account;