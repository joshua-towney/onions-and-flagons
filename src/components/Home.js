import './Home.css'

export default function Home({ intro }) {
    return (
        <div className="home">
            <h1>Onions and Flagons</h1>
            <h2>A choose your own adventure .... IN SPACE </h2>
            <h4>( that also includes fantasy races for whatever reason... )</h4>
            <button onClick={intro}>Start Game</button>
        </div>
    )
}