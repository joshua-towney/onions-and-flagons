
export default function Encounter3({ n3Good, n3Bad, n3Neutral }) {
    return (
        <div>
            <h1>Strange new world</h1>
            <h2>Starlord: "Where the d'ast are we?"</h2>
            <h2>( Surveying the scenary reveals a contryside filled with outdated infrastructure and... a castle?"" )</h2>
            <h2>Stranger: "Salutaions off-worlders. You have trespassed into the kingdom of Hammillot. For this transgression, I sentence you to death by fire-sword"</h2>
            <h2>( The team laughs as they pull out their arsenal of weapons )</h2>
            <h2>Starlord: "Looking a bit outgunned there, pal"</h2>
            <h2>Stranger: "The names not pal, buddy. It's Hamillot, Sir Hamillot"</h2>
            <h2>( A lightsaber extends from its hilt )</h2>
            <div>
                <button onClick={n3Neutral}>"I am your father"</button>
            </div>
            <div>
                <button onClick={n3Bad}>Jump him</button>
            </div>
            <div>
                <button onClick={n3Good}>USE magazine WITH Hamillot</button>
            </div>
        </div>
    )
}