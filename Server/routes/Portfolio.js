const express = require('express');
const router = express.Router();
const PortFolio = require('../models/Portfolio');
const Joi = require('joi');
const {authMiddleware}=require('../Middleware/authMiddleware');

router.get('/',async (req,res)=>{
    const info=await PortFolio.find()
    if(!info){
        return res.status(404).send('No info Found')
    }
    res.status(200).send(info);
})

router.get('/:id',async (req,res)=>{
    const info=await PortFolio.findById(req.params.id)
    if(!info){
        return res.status(404).send('No info Found for id ')
    }
    res.status(200).send(info);
})


router.post('/',authMiddleware,async (req,res)=>{
    const {error}=validatePortfolio(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const portfolio=new PortFolio({
        name: req.body.name,
        profileImage:req.body.profileImage,
        profession: req.body.profession,
        socials:{
            linkedin:req.body.socials.linkedin,
            github:req.body.socials.github,
            twitter:req.body.socials.twitter,
        },
        resumeLink:req.body.resumeLink,
        about:{
            description:req.body.about.description,
            techStack:req.body.about.techStack,
            aboutImage:req.body.about.aboutImage
        }
    })
    const result=await portfolio.save();
    res.status(201).send(result);
})

router.put('/:id',authMiddleware,async (req,res)=>{
    const {error}=validatePortfolio(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const portfolio=await PortFolio.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        profileImage:req.body.profileImage,
        profession: req.body.profession,
        socials:{
            linkedin:req.body.socials.linkedin,
            github:req.body.socials.github,
            twitter:req.body.socials.twitter,
        },
        resumeLink:req.body.resumeLink,
        about:{
            description:req.body.about.description,
            techStack:req.body.about.techStack,
            aboutImage:req.body.about.aboutImage
        }
    },{new:true})

    if(!portfolio){
        return res.status(404).send('No portfolio Found')
    }
    res.status(200).send(portfolio);
})

router.delete("/:id",authMiddleware,async (req,res)=>{
    const portfolio=await PortFolio.findByIdAndDelete(req.params.id)
    if(!portfolio){
        return res.status(404).send('No portfolio Found')
    }
    res.status(200).send(portfolio);
})

function validatePortfolio(portfolio){
    const schema = Joi.object({
        name: Joi.string().required(),
        profileImage:Joi.string().required(),
        profession: Joi.array().items(Joi.string()),
        socials: Joi.object({
            linkedin: Joi.string().uri().required(),
            github: Joi.string().uri().required(),
            twitter: Joi.string().uri(),
        }),
        resumeLink:Joi.string().required(),
        about: Joi.object({
            description: Joi.string(),
            techStack: Joi.array().items(Joi.string()),
            aboutImage:Joi.string(),
        })
    })
    return schema.validate(portfolio)
}

module.exports = router;