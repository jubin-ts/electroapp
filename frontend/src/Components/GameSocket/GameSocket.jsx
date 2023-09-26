import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";

function GameSocket() {
  const [numbers, setNumbers] = useState([]);  // Initialize an empty array to hold numbers

  useEffect(() => {
    const socket = io('http://localhost:5000');
  
    socket.on('message', (message) => {
      console.log('Message received from server:', message);
      // setMessages((prevMessages) => [...prevMessages, message]);
    });
  
    // socket.emit('start', 'Start generating random numbers');
  
    return () => {
      socket.disconnect();
    };
  }, []);
  

  return (
    <div className="App">
      <h1>Random Numbers</h1>
      <ul>
        {numbers.map((number, index) => <li key={index}>{number}</li>)}
      </ul>
    </div>
  );
}

export default GameSocket;
