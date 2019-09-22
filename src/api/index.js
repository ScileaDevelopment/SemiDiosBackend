var express = require('express');
var user = require('./routes/user');
var test = require('./routes/test');
var auth = require('./routes/userAuth');
module.exports = () => {
    const app = express.Router();
    user(app);
    test(app);
    auth(app);
    return app;
}