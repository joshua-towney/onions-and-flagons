
export default function Boss2Pebble({ boss2Bad }) {
    return (
        <div>
            <h1>Epic fail</h1>
            <img id='game-over' src="./img/ko.png"/>
            <h2>( You hurl the pebble into the trajectory of the chauffeur, hoping to shatter him into a million tiny pieces of smaller chauffeur )</h2>
            <h2>( A million tiny chauffeur splinters somehow only hit a single target in your party. They run home to their space mommy )</h2>
            <h2>( Lose 1 life )</h2>
            <button onClick={boss2Bad}>Try something else</button>
        </div>
    )
}