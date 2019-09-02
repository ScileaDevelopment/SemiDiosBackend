const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv.config();

if(!envFound){
    throw new Error('No se puede encontrar el archivo .env');
}

module.exports = {
    /**
     * Favorite PORT
     */
    port: parseInt(process.env.PORT || '3000',10),

    /**
     * API configs
     */
    api:{
        prefix : '/api'
    }
}

