//var {makeExecutableSchema} = require('graphql-tools');
var {buildSchema} = require('graphql');
var resolver = require('../resolvers/userResolver');

const typeDefs = buildSchema(`
    type Query{
        getUser(id:ID!): User
        getUserAll: [User]
    }

    type Mutation{
        setUser(input:UserInput!): User
        updateUser(id:ID!,input:UserInput!): User
    }

    type User{
        id: ID!
        nombre: String
        apellido: String
        fecha_nacimiento: String
        email: String
    }

    input UserInput {
        nombre: String
        apellido: String
        fecha_nacimiento: String
        email: String
    }
`);

module.exports = {
    schema: typeDefs,
    rootValue: resolver,
    graphiql: true,
};