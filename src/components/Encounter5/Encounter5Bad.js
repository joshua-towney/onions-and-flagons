
export default function Encounter5Bad({ newGame }) {

    return (
        <div>
            <h1> Weak sauce </h1>
            <img id='game-over' src="./img/dead.jpeg" alt=""/>
            <h2>( Hamburglar is overjoyed to be invited onto the crew and the lot of you become fast friends. You bond over jobs you pulled, and get up to all sorts of debauchery together. After a few years of pillaging together, Hamburglars mother is crushed to death when snuggling with Grimace. This sends him into a downward spiral and relapses into burger addiction again. Unfortunately he gets the entire crew hooked on the stuff too. Everyone gets fat and eventualy die of the beetus )</h2>
            <button onClick={newGame}>Bad luck. Try again?</button>
        </div>
    )
}