import poke from './assets/pokeapi_256.png'
import './PokeGrid.css'

const PokeGrid = () => {

    return (
        <div className='div-grid'>
            <h3>Pokemons Grid</h3>

            <div className='pokes-grid'>
                <img src={poke} />
                <img src={poke} />
                <img src={poke} />
                <img src={poke} />
                <img src={poke} />
                <img src={poke} />
                <img src={poke} />
                <img src={poke} />
            </div>
        </div>
    )
}

export default PokeGrid
