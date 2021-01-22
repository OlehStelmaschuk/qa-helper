import axios from 'axios'

const _baseURL = 'http://127.1.1.1/api'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const loginRequest = async (user, password) => {
  return await axios.post(`${_baseURL}/users/login`, { user, password }, config)
}
