
export default function Boss3Pebble({ boss3Bad }) {
    return (
        <div>
            <h1>Research?</h1>
            <img id='game-over' src="./img/ko.png"/>
            <h2>( "Scorpions hate the cold" you think to yourself)</h2>
            <h2>( You press the icy rock against his stinger and hope  for the best )</h2>
            <h2>( The developer of this game has no idea if scorpions hate the cold and does not want to spend 5 seconds googling  )</h2>
            <h2>( Lose 1 life for trying to make the developer read )</h2>
            <button onClick={boss3Bad}>Try something else</button>
        </div>
    )
}