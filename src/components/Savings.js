import React, { Component } from 'react';
import Navigation from './Navigation';
import savings from '../assets/savings.png';
import '../styles/Savings.css';
class Savings extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <img id="savings" src={savings} className="pageImg"/>
                <h3 className="pageHeader">SAVINGS</h3>
            </div>
        );
    }
}

export default Savings;