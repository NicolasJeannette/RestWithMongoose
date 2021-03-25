const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const ProjetSchema=new schema({
    nom : String,
    palier: [Number],
    Porteurs: [mongoose.Schema.Types.ObjectId],
    Categorie: [String]
 
})


module.exports=Projet=mongoose.model('Projet',ProjetSchema)