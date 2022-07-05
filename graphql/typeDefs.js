const { gql } = require('apollo-server');

module.exports  = gql`
    type Query{
        sayHi: String!
    }
    type User{
        id: ID!
        email: String!
        token: String!
        firstName: String!
        lastName: String!
        createdAt: String!
    }
    input RegisterInput{
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(email: String!, password: String!): User!
    }
`;