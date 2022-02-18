import './App.css';
import { useState } from 'react';
import Inventory from './components/Inventory';
import Party from './components/Party';
import MainBox from './components/Main-box';
import Home from './components/Home';
import Intro from './components/Intro';
import Encounter1 from './components/Encounter1/Encounter1';
import Encounter1Bad from './components/Encounter1/Encounter1Bad';
import Encouter1Good from './components/Encounter1/Encounter1Good';
import Encounter1Neutral from './components/Encounter1/Encouter1Neutral';
import PostEncounter1 from './components/Encounter1/PostEncounter1';
import Encounter2 from './components/Encounter2/Encounter2';
import Encounter2Neutral from './components/Encounter2/Encounter2Neutral';
import Encounter2Bad from './components/Encounter2/Encounter2Bad';
import Encounter2Good from './components/Encounter2/Encounter2Good';
import PostEncounter2 from './components/Encounter2/PostEncounter2';
import Encounter3 from './components/Encounter3/Encounter3';
import Encounter3Neutral from './components/Encounter3/Encounter3Neutral';
import Encounter3Bad from './components/Encounter3/Encounter3Bad';
import Encounter3Good from './components/Encounter3/Encounter3Good';
import PostEncounter3 from './components/Encounter3/PostEncounter3';
import Encounter4 from './components/Encounter4/Encounter4';
import Encounter4Neutral from './components/Encounter4/Encounter4Neutral';
import Encounter4Bad from './components/Encounter4/Encounter4Bad';
import Encounter4Good from './components/Encounter4/Encounter4Good';
import PostEncounter4 from './components/Encounter4/PostEncounter4';
import Encounter5 from './components/Encounter5/Encounter5';
import Encounter5Neutral from './components/Encounter5/Encounter5Neutral';
import Encounter5Bad from './components/Encounter5/Encounter5Bad';
import Encounter5Good from './components/Encounter5/Encounter5Good';
import PostEncounter5 from './components/Encounter5/PostEncounter5';
import Boss from './components/Boss/Boss';

function App() {

  const partyMembers = [
    {
      "name": "Starlord",
      "img": "./starlord.jpeg",
      "race": "Terran"
    },
    {
      "name": "Gamora",
      "img": "./gamora.png",
      "race": "Zen-Whoberi"
    },
    {
      "name": "Drax",
      "img": "./drax.jpeg",
      "race": "Kylosian"
    },
    {
      "name": "Rocket",
      "img": "./rocket.png",
      "race": "Not a raccoon"
    },
    {
      "name": "Groot",
      "img": "./groot.jpeg",
      "race": "Flora Colossi"
    }
  ]
  const inventoryItems = [
    {
      "name": "Razor",
      "img": "./razor.jpg",
      "description": "Sharp blade signed by Terran band The Village People"
    },
    {
      "name": "Magazine",
      "img": "./magazine.jpeg",
      "description": "Deep fried trash magazine"
    },
    {
      "name": "Lightsaber",
      "img": "./lightsaber.png",
      "description": "Voosh wwwwwahhhh shhwooo"
    },
    {
      "name": "Golf club",
      "img": "./golf.jpeg",
      "description": "Adam's driver"
    },
    {
      "name": "Pebble",
      "img": "./pebble.jpeg",
      "description": "A frozen stone"
    }
  ]

  const intro = () => {
    setMainRender(<Intro recruitParty={recruitParty}/>)
  }
  const newGame = () => {
    setMainRender(<Home intro={intro}/>)
    setParty([])
    setInventory([])
  }

  const [inventory, setInventory] = useState([]);
  const [party, setParty] = useState([]);
  const [mainRender, setMainRender] = useState(<Home intro={intro} />);

  const recruitParty = () => {
    setParty(partyMembers)
    setMainRender(<Encounter1 n1Good={n1Good} n1Bad={n1Bad} n1Neutral={n1Neutral} />)
  }
  const n1Good = () => {
    setMainRender(<Encouter1Good postN1={postN1}/>)
  }
  const n1Bad = () => {
    setMainRender(<Encounter1Bad newGame={newGame}/>);
  }
  const n1Neutral = () => {
   setMainRender(<Encounter1Neutral recruitParty={recruitParty} />)
  }
  const postN1 = () => {
    setInventory([inventoryItems[0]])
    setMainRender(<PostEncounter1 encounter2={encounter2} />)
  }
  const encounter2 = () => {
    setMainRender(<Encounter2 n2Good={n2Good} n2Bad={n2Bad} n2Neutral={n2Neutral} />)
  }
  const n2Good = () => {
    setMainRender(<Encounter2Good postN2={postN2}/>)
  }
  const n2Bad = () => {
    setMainRender(<Encounter2Bad newGame={newGame}/>)
  }
  const n2Neutral = () => {
    setMainRender(<Encounter2Neutral encounter2={encounter2}/>)
  }
  const postN2 = () => {
    setInventory( [inventoryItems[0],inventoryItems[1]])
    setMainRender(<PostEncounter2 encounter3={encounter3}/>)
  }
  const encounter3 = () => {
    setMainRender(<Encounter3 n3Good={n3Good} n3Bad={n3Bad} n3Neutral={n3Neutral} />)
  }
  const n3Good = () => {
    setMainRender(<Encounter3Good postN3={postN3}/>)
  }
  const n3Bad = () => {
    setMainRender(<Encounter3Bad newGame={newGame} />)
  }
  const n3Neutral = () => {
    setMainRender(<Encounter3Neutral encounter3={encounter3}/>)
  }
  const postN3 = () => {
    setInventory( [inventoryItems[0],inventoryItems[1], inventoryItems[2]])
    setMainRender(<PostEncounter3 encounter4={encounter4}/>)
  }
  const encounter4 = () => {
    setMainRender(<Encounter4 n4Good={n4Good} n4Bad={n4Bad} n4Neutral={n4Neutral} />)
  }
  const n4Good = () => {
    setMainRender(<Encounter4Good postN4={postN4}/>)
  }
  const n4Bad = () => {
    setMainRender(<Encounter4Bad newGame={newGame} />)
  }
  const n4Neutral = () => {
    setMainRender(<Encounter4Neutral encounter4={encounter4} />)
  }
  const postN4 = () => {
    setInventory( [inventoryItems[0],inventoryItems[1], inventoryItems[2], inventoryItems[3]])
    setMainRender(<PostEncounter4 encounter5={encounter5}/>)
  }
  const encounter5 = () => {
    setMainRender(<Encounter5 n5Good={n5Good} n5Bad={n5Bad} n5Neutral={n5Neutral} />)
  }
  const n5Good = () => {
    setMainRender(<Encounter5Good postN5={postN5}/>)
  }
  const n5Bad = () => {
    setMainRender(<Encounter5Bad newGame={newGame} />)
  }
  const n5Neutral = () => {
    setMainRender(<Encounter5Neutral encounter5={encounter5} />)
  }
  const postN5 = () => {
    setInventory( [inventoryItems[0],inventoryItems[1], inventoryItems[2], inventoryItems[3], inventoryItems[4]])
    setMainRender(<PostEncounter5 boss={boss}/>)
  }
  const boss= () => {
    setMainRender(<Boss />)
  }

  return (
    <div className="App">
      {inventory.length > 0 && <Inventory inventory={inventory} />}
      <MainBox  intro={intro} mainRender={mainRender} />
      {party.length > 0 && <Party  />}
    </div>
  );
}

export default App;
