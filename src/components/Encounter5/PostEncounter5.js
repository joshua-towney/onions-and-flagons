
export default function PostEncounter5({ boss1 }) {
    return (
        <div>
            <h1>Good to be back off solid ground</h1>
            <img id="game-over" src="./img/challenger.png" alt=""/>
            <h2>( The crew head to the cockpit and find a napsack hanging off the yoke )</h2>
            <h2>Drax: "Open the runts baggage and let's take his possessions"</h2>
            <h2>Gamora: "It's a... frozen rock. Useless, I'm chucking it"</h2>
            <h2>Drax: "Wait woman! These trinkets have been beyond useful in our journey"</h2>
            <h2>( Gamora agrees and pockets the pebble )</h2>
            <h2>( A booming voice can be heard from outside the ship )</h2>
            <h2>Booming voice: "FIGHT ME FOR MY TREASURE YOU CANDY ASSES!"</h2>
            
            <button onClick={boss1}>Investigate commotion</button>
        </div>
    )
}