
export default function Boss3Magazine({ boss3Bad }) {
    return (
        <div>
            <h1>Successful Block</h1>
            <img id='game-over' src="./img/ko.png"/>
            <h2>( The stinger stops dead in its tracks but the horribly rendered cgi claws make the journey around the magazine to clamp you. )</h2>
            <h2>( Dwayne "The Rock" Scorpion King Golem rends you asunder )</h2>
            <h2>( Lose 1 life )</h2>
            <button onClick={boss3Bad}>Try something else</button>
        </div>
    )
}