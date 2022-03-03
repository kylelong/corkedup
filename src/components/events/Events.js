import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventsHeader from './EventsHeader';
import Navigation from '../Navigation';
import SideMenu from '../SideMenu';

const Events = () => {
    // test with zipCode -> cleanUrls with urls array -> promise array with promises containing clean urls
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
                urls.push(cleanUrl(url))
            }
            
        }
        console.log(urls);
        Promise.all(urls).then((response) => {
            console.log("response: ", response)
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
                {/* { 

                cleanUrls.map((url, i) => {
                    return (
                        <p key={i}>{url}</p>
                    )
                })

                } */}
            </div>
        </div>
    );
};

export default Events;