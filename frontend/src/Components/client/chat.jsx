// src/Chat.js
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './Chat.css'; // Import your CSS file


// const socket = io('http://localhost:3001');
const socket = io('http://localhost:3001', { transports: ['websocket'], withCredentials: true });



function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [chatVisible, setChatVisible] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages([...messages, { text: msg, user: 'received' }]);
    });
  }, [messages]);

  useEffect(() => {
    // Scroll to the bottom of the chat window when a new message arrives
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('message', message);
      // setMessages([...messages, { text: message, user: 'sent' }]);
      setMessage('');
    }
  };

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div className={`chat-container ${chatVisible ? 'false' : 'open'}`}>
      
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={handleMessageChange}
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
