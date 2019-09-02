var express = require('express');
const route = express.Router();

module.exports = (app) => {
    app.use('/users',route);
    route.get('/me',(request, response)=>{
        return response.json({id:'12321',name:'asdassd'});
    });
}