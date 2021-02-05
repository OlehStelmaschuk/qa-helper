import express from 'express'
import userRoute from './userRoute.mjs'
import postRoute from './postRoute.mjs'

const apiRouter = express.Router()
apiRouter.use('/users', userRoute)
apiRouter.use('/posts', postRoute)

export default apiRouter
