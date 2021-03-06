import axios from 'axios'
const url = 'http://localhost:3001'

const getAll = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

export default { getAll }