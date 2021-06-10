import React, { useState, useEffect } from 'react';
import useApi from './useApi';

function App() {
 const { response, error, isLoading, refetch } = useApi('http://localhost:4444/orders');
 console.log({ response, error, isLoading });

if (isLoading) {
  return <h1>Loading...</h1>;
}

const onRefresh = () => {
  refetch();
};

  return (
    <div>
       {error && (
         <>
            <h1>Error</h1>
            <p>{error}</p>
          </>  
       )}
       <h1>Data</h1>

        <uL>
          {response.map((order) =>(
          <li key={order.id}>{order.name}</li>
          ))}
        </uL>

           <button onClick={onRefresh}>Refresh</button>   
    </div>
  );
}

export default App;
