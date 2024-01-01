const JWT = require("jsonwebtoken")

const authenticateUser = async (req,res,next)=>{
    const token = req.cookies?.token || null
    if(!token){
        return res.status(404).json({
            Success:false,
            Message:"User Authenticate failed",
            token:req.cookies
        })
    }
    try {
        const payload = JWT.verify(token,process.env.SECRET);
        req.user = {id:payload.id , username:payload.username};
        next()
    } catch (error) {
        return res.status(404).json({
            Success:false,
            Message:error.message,
        })
    }
}




module.exports = {authenticateUser}