
export default function PostEncounter1({ encounter2 }) {
    return(
        <div>
            <h1>Score</h1>
            <img id="game-over" src="./img/villagePeople.jpeg" alt=""/>
            <h2>( Picked up razorblade signed by The Village People )</h2>
            <h2>( How odd... )</h2>
            <button onClick={encounter2}>Let's get our adventure on</button>
        </div>
    )
}