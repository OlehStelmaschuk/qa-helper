import asyncHandler from 'express-async-handler'
import axios from 'axios'

export const getTranslate = asyncHandler(async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://google-translate20.p.rapidapi.com/translate',
    params: { text: req.body.text, tl: req.body.outLang, sl: req.body.inLang },
    headers: {
      'x-rapidapi-key': '9d0c0d2653msh836078c0619ca58p1ad7b5jsn3ed5268ef71c',
      'x-rapidapi-host': 'google-translate20.p.rapidapi.com',
    },
  }

  const { data } = await axios.request(options)
  res.json(data.data.translation)
})