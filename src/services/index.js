import axios from 'axios'
import jsonFile from './fakedb/db.json'

const _baseURL = 'http://localhost:3000'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const loginRequest = async (user, password) => {
  return await axios.post(`${_baseURL}/users/login`, { user, password }, config)
}

export const getAnswerListService = async () => {
  // const { data } = await axios.get(`${_baseURL}/posts`)
  // return data
  return jsonFile.posts
}
