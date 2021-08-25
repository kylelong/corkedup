import React, { Component } from 'react';
import Navigation from './Navigation';
import savings from '../assets/savings.png';
import '../styles/Savings.css';
import data from '../wtso.json';
import axios from 'axios';
import WTSO from './savings/Wtso';


class Savings extends Component {

    constructor(props){
        super();
        this.state = {
           
        }
    }
    componentDidMount(){
       
    }

    
    render() {
        let header = "SAVINGS";
        return (
            <div>
                <Navigation/>
                <div className="savingsContainer">
                    <img id="savings" src={savings} className="pageImg"/>
                    <WTSO/>
                    <WTSO/>
                </div>
            </div>
        );
    }
}

export default Savings;