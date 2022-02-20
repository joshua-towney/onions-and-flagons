
export default function Boss1({ boss2, b1Magazine, b1Lightsaber, b1GolfClub, b1Pebble  }) {
    return (
        <div>
            <h1>It's a Golem</h1>
            <h2>Golem: "Not just any golem. I am their king. Face me mortals. Face the might of DWAYE "THE ROCK" GOLEM"</h2>
            <h2>( The golem steps out of the people's limosine and fist bumps his chauffeur )</h2>
            <h2>Rocket:  "Bring it on, Pebble Butt"</h2>
            <h2>( A volley of blades and bullets fill the air. Everything lands but nothing seems to hurt the beast )</h2>
            <h2>Dwayne: "Is that all you got, you bunch of sissies?"</h2>
            <h2>( Rocky grabs all your weapons and swallows them whole. He looks over towards you and mocks you with The People's Eyebrow. How do you respond? )</h2>
            <button onClick={boss2}>Razor</button>
            <button onClick={b1Magazine}>Magazine</button>
            <button onClick={b1Lightsaber}>Lightsaber</button>
            <button onClick={b1GolfClub}>Golf Club</button>
            <button onClick={b1Pebble}>Pebble</button>
        </div>
    )
}