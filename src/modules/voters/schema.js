const { gql } = require('apollo-server-express')

module.exports = gql`
   type Voters {
      id: ID!
      name: String!
      age: Int!
      address: String!
   }
   type Query {
      voters(age: String! ): [ Voters! ]
   }
   type Mutation {
      newVoters(name: String! age: Int! address: String!): Voters
   }
`