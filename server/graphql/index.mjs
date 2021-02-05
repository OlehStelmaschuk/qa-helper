import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import express from 'express'
const GraphQLRouter = express.Router()

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!'
  },
}

GraphQLRouter.use(
  '/',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

export default GraphQLRouter
