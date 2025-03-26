const mongoose = require('mongoose')
const portfolioSchema=new mongoose.Schema({
    name:String,
    profession:{
        type:[String],
        default:["Software Engineer"]
    },
    socials:{
        linkedin:String,
        github:String,
        twitter:String,
    },
    resumeLink:String,
    about:{
        description:String,
        techStack:[String],
    }
})

module.exports=mongoose.model('portfolio',portfolioSchema)