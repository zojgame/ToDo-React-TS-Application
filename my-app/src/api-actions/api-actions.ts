import axios from 'axios';

export const getData = () => {
    
    return async() => {
        const poke = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        console.log(poke.data);
    }
}