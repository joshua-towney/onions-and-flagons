
export default function Encounter1Bad({newGame}) {
    return (
        <div>
            <h1>GAME OVER</h1>
            <img id='game-over' src="./img/dead.jpeg" alt=""/>
            <h2>( You hear a whistle fill the air seconds before your vision fades to black )</h2>
            <h2>Yondu: "HOW BOUT YOU SUCK ON YAKA ARROW INSTEAD, BOY!!"</h2>
            <button onClick={newGame}>New Game?</button>
        </div>
    )
}