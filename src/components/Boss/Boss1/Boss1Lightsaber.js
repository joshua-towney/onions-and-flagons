
export default function Boss1Lightsaber({ boss1Bad }) {
    return (
        <div>
            <h1>You flarking nerd</h1>
            <img id='game-over' src="./img/ko.png"/>
            <h2>( You leap towards the giant Samoan golem, this time aiming for his eyes, the only part of him not made of stone )</h2>
            <h2> ( The People's eyelids clamp down on the lighsaber before they hit their target )</h2>
            <h2>( He then uses his impressive eyelids as a makeshift guillotine on one of the remaining crew members )</h2>
            <h2>( Lose 1 life )</h2>
            <button onClick={boss1Bad}>Try something else</button>
        </div>
    )
}