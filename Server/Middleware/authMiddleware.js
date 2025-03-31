const jwt=require('jsonwebtoken')
const authMiddleware=(req,res,next)=>{
    const token=req.cookies.token || (req.header("Authorization") ? req.header("Authorization").replace("Bearer ", "") : null)
    if(!token){
        return res.status(401).json({message:"Access denied"})
    }

    try{
        const decoded=jwt.verify(token.replace("Bearer ",""),"portfoliobackend")
        req.user=decoded
        next()
    }
    catch(err){
        res.status(400).json({message:"Invalid token"})
    }
}

const adminMiddleware=(req,res,next)=>{
    if(req.user.role!=='admin'){
        return res.status(403).json({message:"Access denied"})
    }
    next()
}
module.exports={authMiddleware,adminMiddleware}