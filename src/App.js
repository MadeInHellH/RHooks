import React, { useState, useEffect } from 'react';
import useTabStatus from './hooks/useTabStatus';
import useWindowSize from './hooks/useWindowSize';

function App() {
 const { hasFocus} = useTabStatus();
 const { size } = useWindowSize();
  return (
    <div>
       <h1>Focus</h1>
       <span>{`Has Focus ${hasFocus ? 'yes' : 'no'}`}</span>

       <h1>Size</h1>
       <span>{`width: ${size.width} height: ${size.height}`}</span>
    </div>
  );
}

export default App;
