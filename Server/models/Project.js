const mongoose = require('mongoose')

const projectSchema=new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    tags:[String],
    githubLink:String,
    deployedLink:String,
})

module.exports=mongoose.model('Project',projectSchema)