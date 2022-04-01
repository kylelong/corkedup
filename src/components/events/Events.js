import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventsHeader from './EventsHeader';
import Navigation from '../Navigation';
import SideMenu from '../SideMenu';

const Events = () => {
    // test with zipCode -> cleanUrls with urls array -> promise array with promises containing clean urls
    // || JSON.parse(window.localStorage.getItem('bars')) !== cleanUrls)
    const [zipCode, setZipCode] = useState("94109")
    const [urlData, setUrlData] = useState([]);
    const [cleanUrls, setCleanUrls] = useState([]);
// add async await
    useEffect(() => {
        axios.get("/test", {params: { zipCode: zipCode} })
        .then((response) => {
            setUrlData(response.data)
        })
        .catch((error) => {
            console.log(error);
        })


    }, [])
    //#endregion
    const cleanUrl = async (url) => {
        const response = await  axios.get("/cleanUrl", {params: { url: url } });
        const data = await response.data;
        return data;

    }
    //#endregion
    useEffect(() => {
        let urls = []
        for(const url of urlData){
            let data = cleanUrl(url);
            if(data != null){
                urls.push(data);
            }
        }
        Promise.all(urls).then((response) => {
            setCleanUrls(response);
            let bars = JSON.parse(window.localStorage.getItem('bars'));
            console.log(JSON.parse(window.localStorage.getItem('bars')), response);
            if( bars === null || bars === undefined || bars.length == 0) {
                console.log(response);
                window.localStorage.setItem('bars', JSON.stringify(response));
                console.log(window.localStorage.getItem('bars') );
            }
            

        }).catch(err => {
            console.log(err);
        })


    }, [urlData])


    return (
        <div>
            <Navigation />
            <EventsHeader />
            <SideMenu />
            <div>
                { 
   
                (JSON.parse(window.localStorage.getItem('bars')) === undefined || 
                JSON.parse(window.localStorage.getItem('bars')) === null || 
                JSON.parse(window.localStorage.getItem('bars')).length == 0 ) ? 
                <p>Loading...</p> :
                
                JSON.parse(window.localStorage.getItem('bars')).map((url, i) => {
                    return (
                        <p key={i}>{url}</p>
                    )
                }) 

                }
            </div>
        </div>
    );
};

export default Events;