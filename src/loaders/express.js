const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../api');
const config = require('../config');

module.exports = (app) => {
    /**
     * Enable Cross Origin Resource Sharing to all origin
     */
    app.enable(cors);

    /**
     * Middleware that transforms the raw string of req.body into json
     */
    app.use(bodyParser.json());

    /**
     * Load API ROUTES
     */
    app.use(config.api.prefix, routes());

    /**
     * Catch 404 and forward to error handler
     */
    app.use((req,res,next)=>{
        const err = new Error('Not Found');
        //err.status = 404;
        next(err);
    });

    // Error handlers

    app.use((err,req, res, next)=>{
        if( err.name === 'UnauthorizedError'){
            return res
                .status(err.status)
                .send({message: err.message})
                .end();
        }
        return next(err);
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
          errors: {
            message: err.message,
          },
        });
      });
}