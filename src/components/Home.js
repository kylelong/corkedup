import React, { Component } from 'react';
import Navigation from './Navigation';
import '../styles/Home.css';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return ( 
            <div>
               <Navigation />
                {/* <div className="homeMain">
                    <div className="homeContainer">
    
                            <div class="menu">
                                <ul>
                                    <li>
                                        Events
                                    </li>
                                    <li>
                                        Savings
                                    </li>
                                    <li>
                                        Recipes
                                    </li>

                                </ul>
                            </div>
                    </div>
            </div> */}
        </div>

        );
    }
}

export default Home;