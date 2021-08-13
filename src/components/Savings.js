import React, { Component } from 'react';
import Navigation from './Navigation';
import savings from '../assets/savings.png';
import '../styles/Savings.css';
import data from '../wtso.json';
import axios from 'axios';


class Savings extends Component {

    constructor(props){
        super();
        this.state = {
            title: '',
            created_at: '',
            rating: '',
            link: '',
            discount: ''
        }
    }
    componentDidMount(){
        this.setState({
            title: data.text, 
            created_at: data.created_at,
            rating: data.rating,
            link: data.link,
            discount: data.discount
         })
        axios.get("/wtso")
        .then((response) => {
            console.log(response.data);
            this.setState({src: response.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    
    render() {
        let header = "SAVINGS";
        return (
            <div>
                <Navigation header={header} />
                <img id="savings" src={savings} className="pageImg"/>
             <p>{this.state.title}</p>
             <p>Rating {this.state.rating}</p>
             <p>Discount {this.state.discount}</p>
             <img src={this.state.src} />
             <a href={this.state.link} target="_blank">Link to wine</a>
            </div>
        );
    }
}

export default Savings;