const express=require('express')
const router=express.Router()

const Projet=require('../models/Projet')


// sur GET sans id : Affichage Panel pour tous les projet 
// localhost:5000/projet/
// [GET] localhost:5000/projet/
router.get("/",(req,res)=>{

  
    Projet.find()
    .then(projet=>res.send(projet))
    .catch(err=>console.log(err))
})


// sur GET avec id : Affichage le panel du projet
// localhost:5000/utilisateur
router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    console.log(req.params);
    Projet.findOne({_id:_id})
      .then(projets=>res.send(projets))
    .catch(err=>console.log(err))
})

// sur POST sans id : il s'agit de la création du document
// localhost:5000/utilisateur

router.post("/",(req,res)=>{
    const { Nom,mail,Prenom,mdp }=req.body
    const newProjet=new Projet({
        nom,palier,Porteurs,Categorie
    })
    newProjet.save()
    .then(projets=>res.send(projets))
    .catch(err=>console.log(err))
})

// sur PUT avec id : l'édition d'un document
// localhost:5000/projet/6055c2a61bcfb139a404b3a0
router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const {nom,palier,Porteurs,Categorie}=req.body
    Contact.findOneAndUpdate({_id:_id},{nom,palier,Porteurs,Categorie})
    .then(contacts=>res.send("projet maj"))
    .catch(err=>console.log(err))
})
// sur DELETE avec id : la suppression d'un document
//localhost:5000/projet/6055c2a61bcfb139a404b3a0
router.delete("/:_id",(req,res)=>{
    const {_id}=req.params
    Projet.findOneAndDelete({_id:_id})
    .then(contacts=>res.send("success"))
    .catch(err=>console.log(err))
})
module.exports=router