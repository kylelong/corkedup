import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WineBar from './WineBar';
import '../../styles/WineBars.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const WineBars = () =>  {

    const [zipCode, setZipCode] = useState("94109")
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("/winebars", {params: { zipCode: zipCode} })
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error);
        })

    }, [])

    
        return (
            <div className="wineBarsContainer">
                <p>Reputable wine bars where you can enjoy a glass or two &#x1F609; </p>
                <br />
                {data.hasOwnProperty("businesses") &&
                 
                 Object.entries(data.businesses).map(([key, value], i) => {
                     return (
                         <WineBar 
                            key={value.id}
                            name={value.name} 
                            display_name={value.display_phone}
                            display_address={value.location.display_address.join("\n")}
                            url={value.url}
                         />
                     )
                })

                }
            </div>
        );
    
}

export default WineBars;