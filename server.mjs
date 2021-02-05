import express from 'express'
import apiRouter from './server/routes/index.mjs'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import connectDB from './server/config/db.mjs'
import GraphQLRouter from './server/graphql/index.mjs'
import * as middleware from './server/middleware/index.mjs'
import * as path from 'path'

const __dirname = path.resolve()

dotenv.config()
await connectDB()
const app = express()
app.use(cors())

app.use(express.json())

app.use('/api', apiRouter)
app.use('/graphql', GraphQLRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
}

app.use(middleware.notFound)
app.use(middleware.errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`)
})
