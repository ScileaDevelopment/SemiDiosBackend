var config = require('../config/database');
module.exports = require('thinky')(config.rethinkdb);