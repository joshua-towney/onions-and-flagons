
export default function Encounter5({ n5Good, n5Bad, n5Neutral }) {
    return (
        <div>
            <h1>Big ship, little man</h1>
            <img id="game-over" src="./img/hamburglar.jpeg" alt=""/>
            <h2>Gamora: "HALT! THIEF!"</h2>
            <h2>Starlord: "Wait a minute. Hamburglar?"</h2>
            <h2>Hamburglar: "I didn't do nothin"</h2>
            <h2>Rocket: "But we caught you red HAM-ded"</h2>
            <h2>( The team erupt into laughter despite only one of them knowing what ham is )</h2>
            <h2>Hamburglar: "FINE. There just ain't much money to be made selling burgers on the black market. I need to aspire to bigger targets and I'm starting with your ship"</h2>
            <div>
                <button onClick={n5Good}>See what's in your pockets</button>
            </div>
            <div>
                <button onClick={n5Neutral}>Have Gamora sneak up on him</button>
            </div>
            <div>
                <button onClick={n5Bad}>Invite him to join your crew. Another thief will fit right in</button>
            </div>
        </div>
    )
}