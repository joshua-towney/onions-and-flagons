import './App.css';
import { useState } from 'react';
import Inventory from './components/Inventory';
import Party from './components/Party';
import MainBox from './components/Main-box'

function App() {

  const [inventory, setInventory] = useState(['frog']);
  const [party, setParty] = useState(['starlord', 'gamora','drax','rocket','groot'])

  return (
    <div className="App">
      {inventory.length > 0 && <Inventory  />}
      <MainBox  />
      <Party  />
    </div>
  );
}

export default App;
