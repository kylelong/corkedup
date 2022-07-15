import React, { Component, useState } from 'react';
import party from '../../assets/birthday.png';
import '../../styles/EventsHeader.css';
import { Link } from 'react-router-dom';
const EventsHeader = ({headline}) => {

   
        let header = "EVENTS";
        
        return (
            <div className="eventsHeaderContainer">
                <img id="party" src={party}  className="pageImg"/>
                <div className="eventContainer">
                    <div className="eventsContainer">
                        <Link to="/bars"><h4 className="eventHeader">Wine Bars</h4></Link>
                        {/* <Link to="/events"><h4 className="eventHeader">Events</h4></Link> */}
                        <Link to="/restaurants"><h4 className="eventHeader"  style={{marginRight: "30px"}}>Restaurants</h4></Link>
                    </div>
                    <p>{headline}</p>
                </div>
            </div>
        
            
        );
}

export default EventsHeader;