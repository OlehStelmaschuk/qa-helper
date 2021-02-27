import asyncHandler from 'express-async-handler'
import axios from 'axios'

export const getTranslate = asyncHandler(async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://google-translate20.p.rapidapi.com/translate',
      headers: {
        'x-rapidapi-key': process.env.RAPID_API,
        'x-rapidapi-host': 'google-translate20.p.rapidapi.com',
      },
      params: {
        text: req.body.text,
        tl: req.body.outLang,
        sl: req.body.inLang,
      },
    }

    const { data } = await axios.request(options)
    console.log(data, options)
    res.json(data.data.translation)
  } catch (err) {
    console.error(err.message)
  }
})
