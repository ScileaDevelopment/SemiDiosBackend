var userModel = require('../../../models/user');

const root = {
    getUser: async ({id})=>{
        return await userModel.get(id).run();
    },
    getUserAll: async ()=>{
        return await userModel.run();
    },
    setUser: async ({input}) =>{
        input.fecha_nacimiento = Date.parse(input.fecha_nacimiento);
        return await new userModel(Object.assign({}, input)).save();
        /*return await new userModel({
            nombre: 'probando data',
            apellido: 'aqui',
            fecha_nacimiento: Date.parse(input.fecha_nacimiento),
            email: 'luis5@gmail.com'
        }).save();*/
    },
    updateUser: async ({id,input}) =>{
        return await userModel.get(id).update(input);
        /*var rsp = await userModel.get(id).update(input);
        console.log(rsp);
        return rsp;*/  
    }
}
module.exports = root;