var graphqlHTTP = require('express-graphql');
var schema = require('../utils/schemas/userSchema');

module.exports = (app) => {
    app.use('/graph',graphqlHTTP(schema));
}