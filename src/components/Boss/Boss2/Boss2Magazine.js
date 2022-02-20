
export default function Boss2Magazine({ boss2Bad }) {
    return (
        <div>
            <h1>Butter fingers</h1>
            <img id='game-over' src="./rip.png"/>
            <h2>( You hold the deep-fried magazine up in the air, surely the torpedo will splat when he connects )</h2>
            <h2>( Your plan, and your magazine fall to pieces. The only thing harder than this magazine are the starched clothes of the driver )</h2>
            <h2>( This magazine has been with you since the beginning of your journey. You need time to mourn )</h2>
            <h2>( Lose 1 life )</h2>
            <button onClick={boss2Bad}>Try something else</button>
        </div>
    )
}