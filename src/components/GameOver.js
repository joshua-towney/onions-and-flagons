
export default function GameOver({ newGame }) {
    return (
        <div>
            <h1>The entire crew has perished</h1>
            <img id='game-over' src="./skull-and-crossbones.jpeg"/>
            <h2>Think about your poor choices, and may god have mercy on your soul</h2>
            <button onClick={newGame}>New Game?</button>
        </div>
    )
}