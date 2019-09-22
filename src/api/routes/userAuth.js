const graphqlHTTP = require('express-graphql');
var schema = require('../utils/schemas/userAuthSchema');
var resolver = require('../utils/resolvers/userAuthResolver');
const authMiddleware = require('../middlewares/authMiddleware');
module.exports = (app) => {
    app.use('/auth',graphqlHTTP((request, response, graphQLParams)=>({
        schema : schema,
        rootValue : resolver,
        graphiql : true,
        context : authMiddleware(request)
    })));
}