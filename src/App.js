import React, { useState, useEffect } from 'react';
import useTabStatus from './hooks/useTabStatus';

function App() {
 const { hasFocus} = useTabStatus();

  return (
    <div>
       <h1>Focus</h1>
       <span>{`Has Focus ${hasFocus ? 'yes' : 'no'}`}</span>
    </div>
  );
}

export default App;
