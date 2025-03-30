const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter a name']

    },
    email:{
        type:String,
        required:[true,'Please enter a valid email address'],
        match:[
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'Please enter a valid email address'
        ],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please enter your password'],
        minLength:6,

    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    resetPasswordToken:String,
    resetPasswordExpires:Date,
},{timestamps:true})

module.exports=mongoose.model('User',userSchema)