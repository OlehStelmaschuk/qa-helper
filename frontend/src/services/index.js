import axios from 'axios'

const isProd = true

const _baseURL = isProd
  ? `https://qahelper-hu.herokuapp.com/api`
  : `http://localhost:3000/api`

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const loginRequestService = async (name, password) => {
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

export const getSingleAnswerService = async (token, id) => {
  const authConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await axios.get(`${_baseURL}/posts/${id}`, authConfig)
  return data
}

export const createPostService = async (token, postData) => {
  const authConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await axios.post(`${_baseURL}/posts`, postData, authConfig)
  return data
}

export const updatePostService = async (token, postData, id) => {
  const authConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await axios.put(
    `${_baseURL}/posts/${id}`,
    postData,
    authConfig
  )
  return data
}
