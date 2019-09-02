const expressLoader = require('./express');
const {Application} = require('express');

module.exports = async (expressApp)=>{
    await expressLoader(expressApp);
    console.log('Express loaded!');
}