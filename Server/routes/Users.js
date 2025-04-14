const express=require('express')
const router=express.Router()
const User=require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {authMiddleware}=require('../Middleware/authMiddleware');

router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
})

router.post('/register',async (req,res)=>{
    const {name, email, password,role} = req.body
    let user=await User.findOne({email})
    if(user) return res.status(400).json({message:"User already exists"})

    const hashedPassword=await bcrypt.hash(password,10)
    user=new User({name,email,password:hashedPassword,role})
    await user.save()
    const token =jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET,{expiresIn:'1h'} )

    res.cookie('token',token ,{
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 3600000,
        domain:'https://portfoliov2-n5np.onrender.com'
    })

    return res.status(201).json({message:"User successfully registered"})

})

router.post('/login',async (req,res)=>{
    const {email,password} = req.body
    const user=await User.findOne({email})
    if(!user) return res.status(401).send({message:"User not found"})

    const isMatch=await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(401).send({message:'Invalid Email or password'})

    const token =jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET,{expiresIn:'1h'} )
    res.cookie('token',token ,{
        httpOnly: true,
        secure: true,
        // sameSite: 'Strict',
        maxAge: 3600000,
    })

    res.status(200).send({message:"Login successfull"})
})

router.post('/logout',async (req,res)=>{
    res.clearCookie('token',{
        httpOnly:true,
        secure:true,
        // sameSite:'Strict'
    })
    res.json({message:"User logged out"})
})

module.exports = router;