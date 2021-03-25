const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const ProjetFiancement=new schema({
    ProjetId : mongoose.Schema.Types.ObjectId,
    UtilisateurId:  mongoose.Schema.Types.ObjectId,
    Depense: Number
 
})

module.exports=Financement=mongoose.model('financement',ProjetFiancement)