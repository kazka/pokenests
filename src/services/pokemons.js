import axios from 'axios'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon-species/'

const getByName = (name) => {
 const request = axios.get(baseUrl + name)
 //const request = axios.get('http://localhost:3001/' + name)
 return request.then(response => response.data)
}

export default { getByName }