const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
    console.log('Cookies received ', req.cookies)
    const token = req.cookies.token ||
        (req.header("Authorization") ? req.header("Authorization").replace("Bearer ", "") : null);

    if (!token) {
        return res.status(401).json({message: "Access denied"});
    }

    try {
        const tokenToVerify = req.cookies.token ? token : token.replace("Bearer ", "");
        const decoded = jwt.verify(tokenToVerify, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        console.error("Token verification failed:", err)
        res.status(401).json({message: "Invalid token"})
    }
}

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({message: "Access denied"})
    }
    next()
}

module.exports = {authMiddleware, adminMiddleware}