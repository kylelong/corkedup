import axios from 'axios';
import React, { Component } from 'react';

class WineBars extends Component {
    constructor(props){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        axios.get("/winebars")
        .then((response) => {
            console.log(response.data);
            this.setState({data: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default WineBars;