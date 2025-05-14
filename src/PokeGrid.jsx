import poke from './assets/pokeapi_256.png'
import './PokeGrid.css'
// import {Pokedex} from 'pokedex-promise-v2';

// const options = {
//     protocol: 'https',
//     hostName: 'localhost:443',
//     versionPath: '/api/v2/',
//     cacheLimit: 100 * 1000, // 100s
//     timeout: 5 * 1000 // 5s
//   }
//   const P = new Pokedex(options);

const PokeGrid = () => {

    // P.getBerryByName('cheri')
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log('There was an ERROR: ', error);
    // });

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
