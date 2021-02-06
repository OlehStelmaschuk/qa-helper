import axios from 'axios'

const _baseURL = `https://qahelper-hu.herokuapp.com/api`

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const loginRequest = async (name, password) => {
  const { data } = await axios.post(
    `${_baseURL}/users/login`,
    { name, password },
    config
  )
  return data
}

export const getAnswerListService = async (token) => {
  const authConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await axios.get(`${_baseURL}/posts`, authConfig)
  return data
  // return jsonFile.posts
}
