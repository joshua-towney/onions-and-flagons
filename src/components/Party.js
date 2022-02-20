import './Party.css'
export default function Party({ party }) {
    return (
        <div className="party">
            <h1 id="party-h1">Party</h1>

            {party.map( member => {
                return (
                    <section className='party-members' key={member.name}>
                        <div>
                            <img src={member.img} />
                        </div>
                        <div>
                            <h3>{member.name}</h3>
                            <p>{member.race}</p>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}