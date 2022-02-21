

export default function Encounter3Bad({ newGame }) {

    return (
        <div>
            <h1> Bantha fodder </h1>
            <img id='game-over' src="./img/dead.jpeg" alt=""/>
            <h2>( The team rush Beardy McSandals in a unified front. A smile crosses Sir Hamillot's face as the Guardians suddenly cannot move. The lightsaber begins rotaing rapidly in a fan-like motion in mid air. One by one our ragtag group of heroes are lowered slowly into the magic nutribullet feet first to prolong their demise, and to serve  as a warning to anyone that would dare cross the space hobo again )</h2>
            <h2>Sir Hamillot: "I'm Mark Hamillot , bitch!"</h2>
            <button onClick={newGame}>Narrator: "Flawless Victory. Fatality" - New Game?</button>
        </div>
    )
}