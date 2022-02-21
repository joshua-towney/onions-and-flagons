
export default function Victory({ newGame }) {
    return (
        <div>
            <h1>NOOOOO</h1>
            <img id="game-over" src="./img/party.gif" alt=""/>
            <h2>( You jam the deep-fried magazine down his gob  )</h2>
            <h2>Dwayne: "EMPTY CALORIES! NOOOOOOO!"</h2>
            <h2>( The calorie count is so high that it terramorphs him into a croissant )</h2>
            <h2>Starlord: "I guess that makes you The People's Dinner"</h2>
            <h2>( The team laugh maniaclly as they chow down on the buttery pastry )</h2>
            <h2>( Sure, they didn't end up getting any treasure, but they did get a lifetimes supply of trauma to haunt them for the rest of their days )</h2>
            <h2>( END )</h2>
            <button onClick={newGame}> New Game + (Doesn't actually do anything different)</button>
        </div>
    )
}