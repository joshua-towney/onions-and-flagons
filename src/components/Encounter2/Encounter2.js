
export default function Encounter2({ n2Good, n2Bad, n2Neutral }) {
    return (
        <div>
            <h1>What the D'ast?</h1>
            <h2>( The team stop by the local Maccas for some fuel for their big trip )</h2>
            <h2>Moustached Cashier: "Alright so to summarize we have: 1 Double Quarter Pounder meal, 2 Happy meals both with the Richard Rider plushie toy, 1 Triple Big Mac meal, hold the sesame seed bun, hold the cheese, hold the lettuce, hold the onion, hold the speacial sauce, hold the pickle, and a 6 pack of nugs"</h2>
            <h2>Gamora: "Yes that sounds about right"</h2>
            <h2>( The cashier rips off their moustache )</h2>
            <h2>Thanos: "WOULD YOU LIKE ANY DEATH WITH THAT?"</h2>
            <div>
                <button onClick={n2Neutral}>Stand on one leg</button>
            </div>
            <div>
                <button onClick={n2Good}>Rip off your own moustache</button>
            </div>
            <div>
                <button onClick={n2Bad}>USE razor WITH Thanos</button>
            </div>
        </div>
    )
}