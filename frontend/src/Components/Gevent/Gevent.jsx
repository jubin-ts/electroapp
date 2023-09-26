import React, { useEffect } from 'react';

function Gevent({ clb }) {
  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket('ws://localhost:5000');

    // Event listener for WebSocket 'open' event
    ws.addEventListener('open', (event) => {
      console.log('Connected to the WebSocket');
    });

    // Event listener for WebSocket 'message' event
    ws.addEventListener('message', (event) => {
      try {
        const messageData = JSON.parse(event.data);
        console.log('Data received from server:', messageData);
        clb({ time: messageData.time, value: messageData.value });
      } catch (e) {
        console.error('Could not parse JSON message:', event.data);
      }
    });

    // Event listener for WebSocket 'error' event
    ws.addEventListener('error', (event) => {
      console.error('WebSocket Error:', event);
    });

    // Event listener for WebSocket 'close' event
    ws.addEventListener('close', (event) => {
      console.log('WebSocket Connection Closed:', event);
    });

    // Cleanup function to close WebSocket when component unmounts
    return () => {
      ws.close();
    };
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  return (
    <div>
      <h1>WebSocket Example</h1>
      {/* Additional content can go here */}
    </div>
  );
}

export default Gevent;
