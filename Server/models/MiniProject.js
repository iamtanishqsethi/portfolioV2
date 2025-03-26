const mongoose = require('mongoose')

const miniProjectsSchem= new mongoose.Schema({
    name: String,
    description: String,
    githubLink: String,
})
module.exports=mongoose.model('MiniProject',miniProjectsSchem)