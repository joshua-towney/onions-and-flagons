
export default function Boss1Magazine({ boss1Bad }) {
    return (
        <div>
            <h1>Anything for a fan</h1>
            <img id='game-over' src="./img/ko.png"/>
            <h2>( You fling the deep-fried magazine at the golem's neck but it is caught in mid-air. Dwayne pulls out a texta and starts signing his autograph )</h2>
            <h2>Dwayne: "And who do I make this out to? Your widowed partner?"</h2>
            <h2>( The golem frisbees the magazine at a party members stomach, winding them and rendering them useless for the rest of the fight. )</h2>
            <h2>( Dying of shame still means Lose 1 life )</h2>
            <button onClick={boss1Bad}>Try something else</button>
        </div>
    )
}