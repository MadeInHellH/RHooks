import React, { useState, useEffect } from 'react';
import useApi from './useApi';

function App() {
 const { response, error, isLoading} = useApi('http://localhost:4444/orders' + Math.random());
 const[value , setValue] = useState(1);
 console.log({ response, error, isLoading });


// setInterval(() => setValue(value + 1), 1000);
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}

export default App;
