import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [currentMessage, setCurrentMessage] = useState("There are no messages");

  const youveGotMail = ( newMessage ) => {
    setCurrentMessage( newMessage );
  }
    
  return (
    <div className="bg-secondary">
      <MessageForm onNewMessage={ youveGotMail }/>
      <MessageDisplay message={ currentMessage } />
    </div>
  );
}

export default App;