
export default function Boss2Lightsaber({ boss2Bad }) {
    return (
        <div>
            <h1>The force isn't with you</h1>
            <img id='game-over' src="./img/ko.png"/>
            <h2>( You hold the lightsaber in the path of the chauffeur missle, hoping to slice him in half )</h2>
            <h2>( The blade cuts open limo drivers hat, and it is full of sand. You don't like sand. It's course, it's rough, and irritating, and it gets everywhere. The mere sight of it forces you to pull the glow stick out of the way. You are inevitably punted in the jaw by a well dressed man )</h2>
            <h2>( Glass jaw need to sit out the fight. Lose 1 life )</h2>
            <button onClick={boss2Bad}>Try something else</button>
        </div>
    )
}