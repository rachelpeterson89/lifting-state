import React, { useState } from 'react';


const MessageForm = (props) => {

    const [currentMessage, setCurrentMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( currentMessage );
    };

    return (

        <form className="col-5 mx-auto my-5" onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange= { (e) => setCurrentMessage(e.target.value) }
                value={ currentMessage }
            ></textarea>
            <input type="submit" value="Send Message"/>

        </form>
    );
}

export default MessageForm;