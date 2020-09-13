/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloServer, gql, IResolvers } from 'apollo-server-express'
import express from 'express'
import cors from 'cors'
import compression from 'compression'

import { context, typeDefs, resolvers } from './GraphQL'

/* const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`
const resolvers: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return '👋 Hello world! 👋'
    }
  }
} */

// Iniciando express
const app = express()
app.use('*', cors())
app.use(compression())
// Iniciando Apollo
const server = new ApolloServer({ typeDefs, resolvers, context })
server.applyMiddleware({ app })
// Subindo servidor com Express
app.listen({ port: 4000 }, (): void =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)
