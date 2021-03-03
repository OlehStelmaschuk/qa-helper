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

const authConfig = (token) => {
  if (token)
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
}

export const loginRequestService = async (name, password) => {
  const { data } = await axios.post(
    `${_baseURL}/users/login`,
    { name, password },
    config
  )
  return data
}

export const getTranslateService = async (text, inLang, outLang) => {
  if (outLang === 'ua') outLang = 'uk' // fix to TranslateAPI
  const { data } = await axios.post(
    `${_baseURL}/translate`,
    { text, inLang, outLang },
    config
  )
  return data
}

export const getAnswerListService = async (token) => {
  const { data } = await axios.get(`${_baseURL}/posts`, authConfig(token))
  return data
  // return jsonFile.posts
}

export const getSingleAnswerService = async (token, id) => {
  const { data } = await axios.get(`${_baseURL}/posts/${id}`, authConfig(token))
  return data
}

export const createPostService = async (token, postData) => {
  const { data } = await axios.post(
    `${_baseURL}/posts`,
    postData,
    authConfig(token)
  )
  return data
}

export const updatePostService = async (token, postData, id) => {
  const { data } = await axios.put(
    `${_baseURL}/posts/${id}`,
    postData,
    authConfig(token)
  )
  return data
}

export const deletePostService = async (token, id) => {
  const { data } = await axios.delete(
    `${_baseURL}/posts/${id}`,
    authConfig(token)
  )
  return data
}

export const postChangeWeight = async (token, id) => {
  const { data } = await axios.get(`${_baseURL}/posts/${id}`, authConfig(token))
  return data
}
