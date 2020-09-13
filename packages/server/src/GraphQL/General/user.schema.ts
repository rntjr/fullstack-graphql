import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    username: String!
    password: String!
    name: String
  }
  type Query {
    getUsers: [User!]!
    getUser(id: Int!): User!
  }
`

export default typeDefs
