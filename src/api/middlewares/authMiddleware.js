const jwt = require('jsonwebtoken');
const auth = require('../../services/auth/authentication');
module.exports = async (request) =>{
    let authToken = request.headers.authorization;
    let currentUser = null;
    if (authToken) {
        currentUser = await auth.Me(authToken);
    }
    return {
        request,
        authToken,
        currentUser,
    };
}