var thinky = require('../services/thinky');
var type = thinky.type;

/**
 * Create the model
 */

 var User = thinky.createModel("user",{
    id: type.string(),
    nombre: type.string(),
    apellido: type.string(),
    user:type.string(),
    pass:type.string(),
    fecha_nacimiento: type.date(),
    email: type.string().email()
 });

 module.exports = User;