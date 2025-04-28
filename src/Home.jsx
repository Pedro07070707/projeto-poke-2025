import './Home.css'
import PokeFlex from './PokeFlex'

const Home = () => {

    return (
        <div>
            <h3>Pokemons</h3>
            <p>Mundo Poke</p>

            <div className='pokeflex'>
                <PokeFlex />
            </div>
        </div>
    )
}

export default Home
