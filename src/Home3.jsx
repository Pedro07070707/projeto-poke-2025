import './Home3.css'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid';

const Home3 = () => {

    const layoutAtual = false;

    return (
        <div>
            <h3>Pokemons</h3>
            <p>Mundo Poke</p>

            {
                (layoutAtual == true)
                ?
                <div className='pokeflex'>
                    <PokeFlex />
                </div>
            :
                <div className='pokegrid'>
                    <PokeGrid />
                </div>
            }
            
        </div>
    )
}

export default Home3
