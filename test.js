var userModel = require('./src/models/user');

/*var prueba = new userModel({
    nombre: 'probando',
    apellido: 'aqui',
    fecha_nacimiento: new Date(),
    email: 'luis@gmail.com'
});
prueba.save();
console.log("aqui", prueba);*/
//userModel.run().then((rsp)=>console.log(rsp));

//userModel.get('67b95b7d-df71-4122-8542-7ebe582d26a8').then((rsp)=>console.log(rsp));

async function getUser(root,{id}){
    console.log("aqui", id);
    return await userModel.get(id).run();
}
async function getUserAll(){
    console.log("todo");
    return await userModel.run();
}
getUserAll().then( r => console.log(r));



const root = {
    getUser: ({id})=>{
        console.log(id);
        var data = {
            id:"67b95b7d-df71-4122-8542-7ebe582d26a8",
            nombre:"Yerko",
            apellido:"laura",
            fecha_nacimiento:"Sun Aug 25 2019 22:09:00 GMT+00:00",
            email:"luiyer1920@gmail.com"
        };
        return data;
    },
    getData: async () =>{
        return await userModel.run();
    },
    getUserAll: ()=>{
        return [
            {
                id:"67b95b7d-df71-4122-8542-7ebe582d26a8",
                nombre:"Yerko",
                apellido:"laura",
                fecha_nacimiento:"Sun Aug 25 2019 22:09:00 GMT+00:00",
                email:"luiyer1920@gmail.com"
            },
            {
                id:"67b95b7d-df71-4122-8542-7ebe582d26a9",
                nombre:"luis",
                apellido:"laura",
                fecha_nacimiento:"Sun Aug 25 2019 22:09:00 GMT+00:00",
                email:"luiyer1920@gmail.com"
            }
        ];
    }
}