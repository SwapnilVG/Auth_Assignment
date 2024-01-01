
const loginDataValidate = (req,res,next) =>{
    const {username,password} = req.body
    if(req.body && username && password){
        next()
    }else{
        res.status(401).json({message:"All input fields are required"})
    }
}


module.exports = {loginDataValidate}