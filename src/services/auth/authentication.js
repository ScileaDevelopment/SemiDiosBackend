const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var userModel =  require('../../models/user');
require('dotenv').config();
const timeExpire = 10 * 60;
module.exports = {
    Me: async( token )=>{
        let decoded = null;
        try {
           decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch(err) {
            throw new Error("Unauthorization user");
        }
        try {
            return await userModel.get(decoded.id);
        } catch (error) {
            throw new Error("User not found, contact Scilea's admin");
        }
        
    },
    login: async (user, password) => {
        let userData = await userModel.filter({email:user});
        if(userData.length == 0){
            throw new Error('Incorrect username');
        }

        const valid = await bcrypt.compare(password, userData[0].pass);
        if(!valid){
            throw new Error('Incorrect password');
        }

        let token = jwt.sign(
            { id: userData[0].id, email: userData[0].email },
            process.env.JWT_SECRET,
            { expiresIn: timeExpire }
        );

        return {token:token};
    },

    signup: async (datauser)=>{
        datauser.pass = await bcrypt.hash(datauser.pass, 10)
        let user = await new userModel( Object.assign({}, datauser)).save();

        let token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: timeExpire }
        );

        return {token:token};
    }
};