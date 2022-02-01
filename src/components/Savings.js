import React, { Component } from 'react';
import Navigation from './Navigation';
import savings from '../assets/savings.png';
import '../styles/Savings.css';
import data from '../wtso.json';
import axios from 'axios';
import WTSO from './savings/Wtso';
import LastBottle from './savings/LastBottle';

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
                <img id="savings" src={savings} className="pageImg"/>
                <div className="savingsContainer">
              
                    <WTSO/>
                    <LastBottle/>
                </div>
            </div>
        );
    }
}

export default Savings;