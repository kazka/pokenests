import axios from 'axios'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon-species/'

const getByName = (name) => {
  const request = axios.get(baseUrl + name)
  return request.then(response => response.data)
}

export default { getByName }