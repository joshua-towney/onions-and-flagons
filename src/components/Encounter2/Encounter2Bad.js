
export default function Encounter2Bad({ newGame }) {

    return (
        <div>
            <h1>Well that was dumb</h1>
            <img id='game-over' src="./img/dead.jpeg" alt=""/>
            <h2>( Thanos grabs Rocket by the scruff of the neck and jams him down Gamoras throat )</h2>
            <h2>( He then shoves Gamora down Starlords throat, Starlord down Drax's, and Drax Down Groot's )</h2>
            <h2>( The McTurducken becomes an instant hit acorss the galaxy )</h2>
            <button onClick={newGame}>New Game?</button>
        </div>
    )
}