const config = require('./config');
const express = require('express');

async function startServer(){
    const app = express();
    try {
        await require('./loaders')(app);
        app.listen(config.port, err => {
            if(err){
                process.exit(1);
                return;
            }
            console.log(`Server listening on ${config.port}`);
        })   
    } catch (error) {
        console.log(error);
    }
}

startServer();