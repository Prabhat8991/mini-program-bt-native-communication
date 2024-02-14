import './App.css';
import { useState } from 'react';


function handleClick() {
  window.Android.discovery();
}

function App() {

  const [bluetoothList, setBluetoothList] = useState([]);

  window.handleBluetoothData = function(data){
        setBluetoothList(data.split('|'));
  }

  // window.event = new Event('MyEventType');
  // window.addEventListener('MyEventType', function (evt) {
  //   // something is performed
  //   //console.log("####event:" + evt.detail);
  //   setBluetoothList(evt.detail.split('|'));
  // }, false);
  const listItems = bluetoothList.map((item) =>
    <li key={item.toString()}>
      {item.toString()}
    </li>
  );  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bluetooth
        </p>
        <button onClick={handleClick}>
          Connect
        </button>
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
