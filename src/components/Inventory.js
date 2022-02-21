import './Inventory.css'

export default function Inventory({inventory}) {
    return (
        <div className='inventory'>
            <h1 id="inventory-h1">Items</h1>
            {inventory.map( item => {
                return (
                <section className="inventory-items" key={item.name}>
                    <div>
                        <img src={item.img} />
                    </div>
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                </section>
                )
            })}
        </div>
    )
}