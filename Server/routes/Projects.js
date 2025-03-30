const express = require('express')
const router = express.Router()
const Joi = require('joi')
const Project = require('../models/Project');
const {authMiddleware}=require('../Middleware/authMiddleware');


router.get('/',async (req,res)=>{
    const projects=await Project.find()
    if(!projects) return res.status(404).send('Not Projects Found')
    res.status(200).send(projects)
})

router.get('/:id',async (req,res)=>{
    const project=await Project.findById(req.params.id)
    if(!project) return res.status(404).send('Project with id not found ')
    res.status(200).send(project)
})

router.post('/',authMiddleware,async (req,res)=>{
    const {error}=validateProject(req.body)
    if(error){
        res.status(400).send(error.details[0].message)
    }
    const project=new Project({
        title:req.body.title,
        description:req.body.description,
        imageLink:req.body.imageLink,
        tags:req.body.tags,
        githubLink:req.body.githubLink,
        deployedLink:req.body.deployedLink,
    })
    const result=await project.save()
    res.status(201).send(result)
})

router.put('/:id',authMiddleware,async (req,res)=>{
    const {error}=validateProject(req.body)
    if(error){
        res.status(400).send(error.details[0].message)
    }
    const project=await Project.findByIdAndUpdate(req.params.id,{
        title:req.body.title,
        description:req.body.description,
        imageLink:req.body.imageLink,
        tags:req.body.tags,
        githubLink:req.body.githubLink,
        deployedLink:req.body.deployedLink,
    },{new:true})
    if(!project){
        return res.status(404).send('Project with id not found.')
    }
    res.status(200).send(project)
})


router.delete('/:id',authMiddleware,async (req,res)=>{
    const project=await Project.findByIdAndDelete(req.params.id)
    if(!project){
        return res.status(404).send('Project with id not found.')
    }
    res.status(200).send(project)
})


function validateProject(project){
    const schema=Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        imageLink: Joi.string().uri().required(),
        tags: Joi.array().items(Joi.string()).required(),
        githubLink: Joi.string().uri().required(),
        deployedLink: Joi.string().uri(),
    })
    return schema.validate(project)
}
module.exports = router