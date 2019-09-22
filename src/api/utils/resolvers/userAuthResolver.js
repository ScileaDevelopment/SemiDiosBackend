const authUser = require('../../../services/auth/authentication');
const root = {
    Me: async({token})=>{
        return await authUser.Me(token);
    },
    login: async ({input}, context) => {
        return await authUser.login(input.user,input.pass)
    },
    signup: async({input}) => {
        return await authUser.signup(input);
    }
};

module.exports = root;