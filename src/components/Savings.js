import React, { Component } from 'react';
import Navigation from './Navigation';
import savings from '../assets/savings.png';
import '../styles/Savings.css';
import data from '../wtso.json';

class Savings extends Component {

    constructor(props){
        super();
        this.state = {
            wtso: ''
        }
    }
    componentDidMount(){
        this.setState({wtso: data.text})
        console.log(this.state.wtso);
        if(this.state.wtso.includes("Right now on WTSO:")){
            console.log("CONTAINS");
            this.setState({wtso: this.state.wtso.replace("Right now on WTSO:", "")})
        }
    }

    
    render() {
        let header = "SAVINGS";
        return (
            <div>
                <Navigation header={header} />
                <img id="savings" src={savings} className="pageImg"/>
             <p>{this.state.wtso}</p>
            </div>
        );
    }
}

export default Savings;