import React, { Component } from 'react';
import Navigation from './Navigation';
import party from '../assets/birthday.png';
import '../styles/Events.css';
import WineBars from './events/WineBars.js';
;class Events extends Component {
    render() {
        let header = "EVENTS";
        
        return (
            <div>
                <Navigation/>
                <img id="party" src={party}  className="pageImg"/>
                <WineBars />
            </div>
        );
    }
}

export default Events;