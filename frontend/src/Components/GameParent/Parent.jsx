import React, { useState } from 'react';
import GameSocket from './GameSocket';
import LineChart from './LineChart';

function Parent() {
  const [numbers, setNumbers] = useState([]);
  
  return (
    <div>
      <GameSocket setNumbers={setNumbers} />
      <LineChart numbers={numbers} />
    </div>
  );
}

export default Parent;
