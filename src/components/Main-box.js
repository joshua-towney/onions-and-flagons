import './Main-box.css'

export default function MainBox() {
    return (
        <div className='main-box'>
          <h1>Onions and Flagons</h1>
          <button className="newgame">
            New Game?
          </button>
          <div className="gameplay">
            <h2>You encounter an Orc blocking the bridge. How do you proceed?</h2>
            <button>Run</button>
            <button>Throw the wimpiest punch</button>
            <button>Insult his mother</button>
            <div className="outcome">
              <h2>A look of disbeief falls over the orcs face as he can't believe anyone would be stupid enough to insult his mother. As he grinds Starlords bones to dust, the final throughts running through his head were of pure disbelief that his plan did not work. </h2>
              <h2>Starlord has been KIA. Your journey now continues without him.</h2>
              <img className="skull" src="/skull-and-crossbones.jpeg" />
            </div>
          </div>
        </div>
    )
}