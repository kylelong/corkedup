import React, { Component, useState } from 'react';
import Navigation from './Navigation';
import party from '../assets/birthday.png';
import '../styles/Events.css';
import WineBars from './events/WineBars.js';
import Restaurants from './events/Restaurants.js';
const Events = () => {
    const [eventType, setEventType] = useState("winebars")
    const clickedButton = (text) => {
        setEventType(text);
    }
   
        let header = "EVENTS";
        
        return (
            <>
         <Navigation/>
                <div className="eventContainer">
       
                    <img id="party" src={party}  className="pageImg"/>
                    <div className="eventsContainer">
                        <h4 className="eventHeader" id={eventType === "winebars" ? "eventHeaderSelected" : ""} onClick={() => clickedButton("winebars")}>Wine Bars</h4>
                        <h4 className="eventHeader" id={eventType === "events" ? "eventHeaderSelected" : ""} onClick={() => clickedButton("events")}>Events</h4>
                        <h4 className="eventHeader" id={eventType === "restaurants" ? "eventHeaderSelected" : ""} onClick={() => clickedButton("restaurants")} style={{marginRight: "30px"}}>Restaurants</h4>
                    </div>
                    <div>
                        {eventType === "winebars" && <WineBars />}
                        {eventType === "restaurants" && <Restaurants />}
                    </div>
                </div>
        
            </>
        );
}

export default Events;