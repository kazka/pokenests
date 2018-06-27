import axios from 'axios'
const url = 'http://localhost:3001/'

const save = (data) => {
  const request = axios.post(url, data)
  return request.then(response => response.data)
}

export default { save }