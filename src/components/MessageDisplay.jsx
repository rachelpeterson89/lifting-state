import React, { useState } from 'react';


const MessageDisplay = props => {

    return (
        <div className="col-5 mx-auto my-5">
            <h1>Current Message</h1>
            <pre>{ props.message }</pre>
        </div>
    );
};

export default MessageDisplay;
