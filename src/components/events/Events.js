import React from 'react';
import EventsHeader from './EventsHeader';
import Navigation from '../Navigation';
import SideMenu from '../SideMenu';
const Events = () => {
    return (
        <div>
            <Navigation />
            <EventsHeader />
            <SideMenu />
        </div>
    );
};

export default Events;