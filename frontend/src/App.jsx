import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Graph from './Components/Graph/Graph';
import Winning from './Components/Winning/Winning';
import Banner from './Components/Banner/Banner';
import Payments from './Components/Payments/Payments';
import Gevent from './Components/Gevent/Gevent';
import Signup from './Components/SignUp/SignUp';

function App() {
  const [messages, setMessages] = useState([]);

  const callbackFunc = (message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <>
      <Navbar />
      <Header />
      <Graph messages={messages} />
      <Winning />
      <Banner />
      <Payments />
      <Gevent clb={callbackFunc} />
      <Signup/>
    </>
  );
}

export default App;
