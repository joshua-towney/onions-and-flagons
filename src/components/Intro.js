
export default function Intro({ recruitParty }) {
    return (
        <div>
            <h1>A new adventure awaits...</h1>
            <img id="game-over" src="./img/space.jpeg" alt="" />
            <h2>Stranger: "WHO WANTS TO ADVENTURE WITH ME?"</h2>
            <h2>( Silence fills the air )</h2>
            <h2>Stranger: "THERE'LL BE MUGGIN AND BRAWLIN'!"</h2>
            <h2>( A few sets of ears prick up but no one takes the bait )</h2>
            <h2>Stranger: "AND TREASURE"</h2>
            <h2>Furry Monster: "WELL WHY DIDN'T YOU START WITH THAT YA FLARKIN' NUMBSKULL?"</h2>
            <h2>( The motley crew aproach the stranger )</h2>
            <h2>Furry Monster: "Five way split and we're in"</h2>
            <h2>( The small creature signals to the rest of his group )</h2>
            <h2>Stranger: "Well lets get this show on the road then. Name's Starlord..."</h2>
            <button onClick={recruitParty} >Recruit Party</button>
        </div>
    )
}