const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const UserSchema=new schema({
    Prenom : {type:String},
    mail: {type:String} ,
    mdp: {type:String} ,
    Nom: {type:String},
})

const usermodel = mongoose.model('Utilisateur',UserSchema)
module.exports = usermodel
