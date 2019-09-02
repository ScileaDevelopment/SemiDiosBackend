var express = require('express');
var user = require('./routes/user');
var test = require('./routes/test');
module.exports = () => {
    const app = express.Router();
    user(app);
    test(app);
    return app;
}