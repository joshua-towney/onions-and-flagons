
export default function Boss3({ boss4, b3Magazine, b3Pebble }) {
    return (
        <div>
            <h1>FOOORRRREEE</h1>
            <img id="game-over" src="./img/headbutt.jpeg" />
            <h2>His palms are sweaty, knees weak, arms are heavy</h2>
            <h2>You counter Dwayne's driver with Adam's driver, mom's spaghetti</h2>
            <h2>( The limo driver is returned to sender and depletes a good chunk of the golem's health but that just makes him angrier )</h2>
            <h2>( Rocky turns into a horribly rendered cgi man-scorpion. His horribly rendered cgi stinger lunges towards you )</h2>
            <button onClick={b3Magazine}>Magazine</button>
            <button onClick={boss4}>Lightsaber</button>
            <button onClick={b3Pebble}>Pebble</button>
        </div>
    )
}