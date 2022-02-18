import './Party.css'
export default function Party() {
    return (
        <div className="party">
            <h1 id="party-h1">Party</h1>
            <div className="party-members" id='starlord'>
            <img src="/starlord.jpeg" />
            <div className="bio">
                <h3>Starlord</h3>
                <ul>Tactition</ul>
                <ul>Leader</ul>
                <ul>Party boy</ul>
            </div>
            </div>
            <div className="party-members" id='gamora'>
            <img src="/gamora.png" />
            <div className="bio">
                <h3>Gamora</h3>
                <ul>Assassin</ul>
                <ul>Stealthy</ul>
                <ul>Tough</ul>
            </div>
            </div>
            <div className="party-members" id='drax'>
            <img src="/drax.jpeg" />
            <div className="bio">
                <h3>Drax</h3>
                <ul>Strong</ul>
                <ul>Irrational</ul>
                <ul>Psycho</ul>
            </div>
            </div>
            <div className="party-members" id='rocket'>
            <img src="/rocket.png" />
            <div className="bio">
                <h3>Rocket</h3>
                <ul>Tactition</ul>
                <ul>Bombs expert</ul>
                <ul>Short fuse</ul>
            </div>
            </div>
            <div className="party-members" id='groot'>
            <img src="groot.jpeg" />
            <div className="bio">
                <h3>Groot</h3>
                <ul>Total bro</ul>
                <ul>Team medic</ul>
                <ul>I am Groot</ul>
            </div>
            </div>
        </div>
    )
}