import poke from './assets/pokeapi_256.png'
import './PokeFlex.css'

const PokeFlex = () => {

    return (
        <div>
            <h3>Pokemons Flex</h3>

            <div className='pokes'>
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

export default PokeFlex
