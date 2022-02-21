
export default function Encounter5Neutral({ encounter5 }) {
    return (
        <div>
            <h1>Swing and a miss</h1>
            <img id="game-over" src="./img/sneaky.jpeg" alt=""/>
            <h2>( Gamora tries to sneak up on the little bastard but is always caught in the act )</h2>
            <h2>Gamora: "How the hell do you..."</h2>
            <h2>Hamburglar: "I'm very, very sneaky. Years of Ronald McDonald Academy larceny training "</h2>
            <h2>( Gamora makes one final attempt to nab the thief )</h2>
            <h2>Hamburglar: "Amatuer"</h2>
            <h2>Gamora: "GRRRRRRR"</h2>
            <button onClick={encounter5}>Try again to outsmart him</button>
        </div>
    )
}