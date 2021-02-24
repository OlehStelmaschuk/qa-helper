import express from 'express'
import userRoute from './userRoute.mjs'
import postRoute from './postRoute.mjs'
import translateRoute from './translateRoute.mjs'

const apiRouter = express.Router()
apiRouter.use('/users', userRoute)
apiRouter.use('/posts', postRoute)
apiRouter.use('/translate', translateRoute)

export default apiRouter
