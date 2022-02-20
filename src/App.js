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
import Boss1 from './components/Boss/Boss1/Boss1';
import Boss1GolfClub from './components/Boss/Boss1/Boss1GolfClub';
import Boss1Magazine from './components/Boss/Boss1/Boss1Magazine';
import Boss1Lightsaber from './components/Boss/Boss1/Boss1Lightsaber';
import Boss1Pebble from './components/Boss/Boss1/Boss1Pebble';
import Boss2 from './components/Boss/Boss2/Boss2.js';
import Boss2Pebble from './components/Boss/Boss2/Boss2Pebble';
import Boss2Magazine from './components/Boss/Boss2/Boss2Magazine';
import Boss2Lightsaber from './components/Boss/Boss2/Boss2Lightsaber';
import Boss3 from './components/Boss/Boss3/Boss3';
import Boss3Pebble from './components/Boss/Boss3/Boss3Pebble';
import Boss3Magazine from './components/Boss/Boss3/Boss3Magazine';
import Boss4 from './components/Boss/Boss4and5/Boss4';
import Boss4Magazine from './components/Boss/Boss4and5/Boss4Magazine';
import Boss5 from './components/Boss/Boss4and5/Boss5';
import GameOver from './components/GameOver';
import Victory from './components/Victory';


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
      "description": "Signed by Terran band The Village People"
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
      "description": "Looted from Adam Driver"
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
    partyCount = 0
    setMainRender(<Home intro={intro}/>)
    setParty([])
    setInventory([])
  }

  const [inventory, setInventory] = useState([]);
  const [party, setParty] = useState([]);
  const [mainRender, setMainRender] = useState(<Home intro={intro} />);

  let partyCount = 0

  const recruitParty = () => {
    setParty(partyMembers)
    setMainRender(<Encounter1 n1Good={n1Good} n1Bad={n1Bad} n1Neutral={n1Neutral} />)
    partyCount = 5
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
    setMainRender(<PostEncounter5 boss1={boss1}/>)
  }
  const boss1 = () => {
    setMainRender(<Boss1 boss2={boss2} b1Magazine={b1Magazine}b1Lightsaber={b1Lightsaber} b1GolfClub={b1GolfClub} b1Pebble={b1Pebble} />)
  }
  const boss1Bad = () => {
    partyCount = partyCount - 1
    let newParty = []
    for(let i = 0; i < partyCount; i++) {
      newParty.push(partyMembers[i])
    }
    setParty(newParty)

    if(partyCount == 0) {
      setMainRender(<GameOver newGame={newGame}/>)
    } else {
      setMainRender(<Boss1 boss2={boss2} b1Magazine={b1Magazine}b1Lightsaber={b1Lightsaber} b1GolfClub={b1GolfClub} b1Pebble={b1Pebble} />)
    }
  }
  const b1Magazine = () => {
    setMainRender(<Boss1Magazine boss1Bad={boss1Bad}/>)
  }
  const b1Lightsaber = () => {
    setMainRender(<Boss1Lightsaber boss1Bad={boss1Bad}/>)
  }
  const b1GolfClub = () => {
    setMainRender(<Boss1GolfClub boss1Bad={boss1Bad} />)
  }
  const b1Pebble = () => {
    setMainRender(<Boss1Pebble boss1Bad={boss1Bad}/>)
  }
  const boss2 = () => {
    setInventory([inventoryItems[1],inventoryItems[2],inventoryItems[3],inventoryItems[4]])
    setMainRender(<Boss2 b2Magazine={b2Magazine} b2Lightsaber={b2Lightsaber} b2Pebble={b2Pebble} boss3={boss3} />)
  }
  const boss2Bad = () => {
    partyCount = partyCount - 1
    let newParty = []
    for(let i = 0; i < partyCount; i++) {
      newParty.push(partyMembers[i])
    }
    setParty(newParty)

    if(partyCount == 0) {
      setMainRender(<GameOver newGame={newGame}/>)
    } else {
      setMainRender(<Boss2 boss3={boss3} b2Magazine={b2Magazine}b2Lightsaber={b2Lightsaber} b2Pebble={b2Pebble} />)
    }
  }
  const b2Magazine = () => {
    setMainRender(<Boss2Magazine boss2Bad={boss2Bad}/>)
  }
  const b2Lightsaber = () => {
    setMainRender(<Boss2Lightsaber boss2Bad={boss2Bad}/>)
  }
  const b2Pebble = () => {
    setMainRender(<Boss2Pebble boss2Bad={boss2Bad}/>)
  }
  const boss3 = () => {
    setInventory([inventoryItems[1],inventoryItems[2],inventoryItems[4]])
    setMainRender(<Boss3 b3Magazine={b3Magazine} b3Pebble={b3Pebble} boss4={boss4} />)
  }
  const boss3Bad = () => {
    partyCount = partyCount - 1
    let newParty = []
    for(let i = 0; i < partyCount; i++) {
      newParty.push(partyMembers[i])
    }
    setParty(newParty)

    if(partyCount == 0) {
      setMainRender(<GameOver newGame={newGame}/>)
    } else {
      setMainRender(<Boss3 boss4={boss4} b3Magazine={b3Magazine}boss4={boss4} b3Pebble={b3Pebble} />)
    }
  }
  const b3Magazine = () => {
    setMainRender(<Boss3Magazine boss3Bad={boss3Bad}/>)
  }
  const b3Pebble = () => {
    setMainRender(<Boss3Pebble boss3Bad={boss3Bad}/>)
  }
  const boss4 = () => {
    setInventory([inventoryItems[1], inventoryItems[4]])
    setMainRender(<Boss4 b4Magazine={b4Magazine} boss5={boss5} />)
  }
  const b4Magazine = () => {
    setMainRender(<Boss4Magazine boss5={boss5} boss4Bad={boss4Bad}/>)
  }
  const boss4Bad = () => {
    partyCount = partyCount - 1
    let newParty = []
    for(let i = 0; i < partyCount; i++) {
      newParty.push(partyMembers[i])
    }
    setParty(newParty)

    if(partyCount == 0) {
      setMainRender(<GameOver newGame={newGame}/>)
    } else {
      setMainRender(<Boss4 boss5={boss5} b4Magazine={b4Magazine} />)
    }
  }
  const boss5 = () => {
    setInventory([inventoryItems[1]])
    setMainRender(<Boss5 victory={victory} />)
  }
  const victory = () => {
    setInventory([])
    setMainRender(<Victory newGame={newGame}/>)
  }

  return (
    <div className="App">
      {inventory.length > 0 && <Inventory inventory={inventory} />}
      <MainBox  intro={intro} mainRender={mainRender} />
      {party.length > 0 && <Party party={party} />}
    </div>
  );
}

export default App;
