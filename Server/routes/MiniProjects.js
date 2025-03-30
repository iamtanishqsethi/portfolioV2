const express=require('express')
const router=express.Router()
const Joi = require('joi')
const MiniProject=require('../models/MiniProject')
const {authMiddleware}=require('../Middleware/authMiddleware');


router.get('/',async (req,res)=>{
    const projects= await MiniProject.find()
    if(!projects){
        return res.status(404).send('Mini Projects not found')
    }
    res.status(200).send(projects)
})

router.get('/:id',async (req,res)=>{
    const project=await MiniProject.findById(req.params.id)
    if(!project){
        return res.status(404).send('Mini Project with the id not found')
    }
    res.status(200).send(project)
})

router.post('/',authMiddleware, async (req,res)=>{
    const {error}=validateMiniProject(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    const project=new MiniProject({
        name:req.body.name,
        description:req.body.description,
        githubLink:req.body.githubLink,
    })
    const result=await project.save()
    res.status(201).send(result)
})

router.put('/:id',authMiddleware,async (req,res)=>{
    const {error}=validateMiniProject(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    const project=await MiniProject.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        description:req.body.description,
        githubLink:req.body.githubLink,
    },{new:true})
    if(!project){
        return res.status(404).send('Mini Project with the id not found')
    }
    res.status(200).send(project);
})


router.delete('/:id',authMiddleware,async (req,res)=>{
    const project=await MiniProject.findByIdAndDelete(req.params.id)
    if(!project){
        return res.status(404).send('Mini Project with the id not found')
    }
    res.status(200).send(project);
})

function validateMiniProject(project){
    const schema=Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        githubLink: Joi.string().uri().required(),
    })
    return schema.validate(project)
}
module.exports=router