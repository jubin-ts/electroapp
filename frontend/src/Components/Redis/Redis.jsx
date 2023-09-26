import React, { useEffect, useState } from 'react';

function Redis() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Create WebSocket connection.
    const ws = new WebSocket('ws://localhost:5000/echo');

    // Connection opened
    ws.addEventListener('open', function (event) {
      console.log("Connected to the WebSocket");
    });

    // Listen for messages
    ws.addEventListener('message', function (event) {
      try {
        const messageData = JSON.parse(event.data);
        console.log('Data received from server:', messageData);
        setData(messageData);
      } catch (e) {
        console.error("Could not parse JSON message:", event.data);
      }
    });

    // Handle any errors that occur.
    ws.addEventListener("error", function (event) {
      console.error("WebSocket Error", event);
    });

    // Log WebSocket closures.
    ws.addEventListener("close", function (event) {
      if (event.wasClean) {
        console.log(`Closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.warn(`Connection died`);
      }
    });

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Example</h1>
      <div>Data from WebSocket: {JSON.stringify(data)}</div>
    </div>
  );
}

export default Redis;
