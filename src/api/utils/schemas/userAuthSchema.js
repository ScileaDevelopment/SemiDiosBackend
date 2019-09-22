const {buildSchema} = require('graphql');
const shema = buildSchema(`
    type Query{
        Me(token:String!): User
    }
    type Auth{
        token:String!
    }
    type Mutation{
        login(input:UserInput!):Auth
        signup(input:UserInput!):Auth
    }
    type User{
        id: ID!
        nombre: String
        apellido: String
        pass:String,
        user:String,
        fecha_nacimiento: String
        email: String
    }

    input UserInput {
        nombre: String
        apellido: String
        pass:String,
        user:String,
        fecha_nacimiento: String
        email: String
    }
`);

module.exports = shema;