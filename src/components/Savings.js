import React, { Component } from 'react';
import Navigation from './Navigation';
import savings from '../assets/savings.png';
import '../styles/Savings.css';


class Savings extends Component {
    
    render() {
        let header = "SAVINGS";
        return (
            <div>
                <Navigation header={header} />
                <img id="savings" src={savings} className="pageImg"/>
            
            </div>
        );
    }
}

export default Savings;