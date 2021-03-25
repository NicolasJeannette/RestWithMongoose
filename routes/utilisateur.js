const express=require('express')
const router=express.Router()

var Utilisateur=require('../models/Utilisateur')

// sur GET avec id : Affichage le panel de l'utilisateur
// localhost:5000/utilisateur
router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    console.log(req.params);
    Utilisateur.findOne({_id:_id})
      .then(utilisateur=>res.send(utilisateur))
    .catch(err=>console.log(err))
})

// sur POST sans id : il s'agit de la création du document
// localhost:5000/utilisateur

router.post("/",(req,res)=>{
    const { Nom,mail,Prenom,mdp }=req.body
    const newUser=new Utilisateur({
        Nom,mail,Prenom,mdp
    })
    newUser.save()
    .then(users=>res.send(users))
    .catch(err=>console.log(err))
})

// sur PUT avec id : l'édition d'un document
// localhost:5000/utilisateur/6055c2a61bcfb139a404b3a0
router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const {Nom,mail,Prenom,mdp}=req.body
    Contact.findOneAndUpdate({_id:_id},{Nom,mail,Prenom,mdp})
    .then(contacts=>res.send("Utilisateur Updated"))
    .catch(err=>console.log(err))
})
// sur DELETE avec id : la suppression d'un document
//localhost:5000/utilisateur/6055c2a61bcfb139a404b3a0
router.delete("/:_id",(req,res)=>{
    const {_id}=req.params
    Contact.findOneAndDelete({_id:_id})
    .then(contacts=>res.send("success"))
    .catch(err=>console.log(err))
})

module.exports=router