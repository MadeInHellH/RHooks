import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [count, setCount] = useState(0);
  const [deviceType, setDeviceType] = useState('desktop');
  const [ datos, setDatos] = useState({
    nombre: '', 
    edad: 0,
  });

  console.log(datos);

  return (
    <div
       onClick={() => setCount(count + 1)}
       >
         numero de clicks {count}

         <button
         onClick={() => {
           setDatos({
             ...datos,
             nombre: 'leo',
              });
               }}
               >
           canbiar datos
         </button>
         
         <br />
         desktop
         <input
               onClick={() => setDeviceType('desktop')}
               checked={deviceType === 'desktop'}
               type="checkbox"
               />

         <br />
         mobible
         <input
               onClick={() => setDeviceType('mobible')}
               checked={deviceType === 'mobible'}
               type="checkbox"
               />       

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log('Hola mundo react!');

export default App
