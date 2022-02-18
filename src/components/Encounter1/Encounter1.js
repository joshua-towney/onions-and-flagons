import './Encounter1.css'

export default function Encounter1({ n1Good, n1Bad, n1Neutral }) {
    return (
        <div>
            <h1>You gotta be kidding me?!</h1>
            <h2>The newly forged alliance take a single step from the saloon and run into their first obstacle...</h2>
            <h2>Yondu: "HEY BOY! You got a lot of nerve leavin' your family behind like that"</h2>
            <h2>Starlord: "Oh hey Yondu. I was just about to...</h2>
            <div>
                <button onClick={n1Neutral}>"... Come get you guys. The more the merrier right?"</button>
            </div>
            <div>
                <button onClick={n1Bad}>"...Go to the store to buy you some citrus so I can tell you to SUCK A LEMON"</button>
            </div>
            <div>
                <button onClick={n1Good}>"....about to, about to. You know what? YOU'RE NOT MY REAL DAD!!!"</button>
            </div>
            
        </div>
    )
}