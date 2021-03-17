import React, { Component } from 'react';
import Navigation from './Navigation';
import party from '../assets/birthday.png';
import '../styles/Events.css';
class Events extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <img id="party" src={party}  className="pageImg"/>
                <h3 className="pageHeader">EVENTS </h3>
            </div>
        );
    }
}

export default Events;