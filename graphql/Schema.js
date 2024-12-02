const { buildSchema } = require('graphql');


const schema = buildSchema(`
    type User {
      id: ID!
      firstName: String!
      lastName: String!
      email: String!
    }
  
    type Query {
      getUser(id: ID!): User
      getUsers: [User]
    }
  
    type Mutation {
      createUser(firstName: String!, lastName: String!, email: String!): User
      updateUser(id: ID!, firstName: String, lastName: String, email: String): User
      deleteUser(id: ID!): User
    }
`);

module.exports = schema;