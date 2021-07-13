import React from 'react';

function Logo(props) {
    return (
        <div className="nameContainer">
                <h3 id="name">Corked Up</h3>
                {props.header &&
                   <h3 className="pageHeader">{props.header}</h3>
                }
        </div>
    );
}

export default Logo;