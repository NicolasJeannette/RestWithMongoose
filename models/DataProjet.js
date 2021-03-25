const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const DataProjetShemas=new schema({
    Projet : mongoose.Schema.Types.ObjectId,
    Utilisateur:  mongoose.Schema.Types.ObjectId,
    Like: Boolean,
    followe:Boolean
 
})
module.exports=mongoose.model('DataProjet',DataProjetShemas)