
export default function Boss1GolfClub({ boss1Bad }) {
    return (
        <div>
            <h1>Butter fingers</h1>
            <img id='game-over' src="./img/ko.png"/>
            <h2>( Sweat erupts from you like a geyser at the thoughht of battling this colossus. You swing the golf club as hard as you can but it flies out of your hands and heads south for the winter. )</h2>
            <h2>( Inspired by the trajectory of your weapon, the golem selects grabs the ally nearest him, and yeets him into the stratosphere )</h2>
            <h2>( Lose 1 life )</h2>
            <button onClick={boss1Bad}>Try something else</button>
        </div>
    )
}