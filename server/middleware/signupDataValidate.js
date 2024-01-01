const signupDataValidate = (req,res,next) =>{
    const {name,username,email,password,bio} = req.body
    if(req.body && name && username && email && password && bio){
        next()
    }else{
        res.status(400).json({
            Success:false,
            message: "Please provide all the required information"
        })
    }
}

module.exports ={signupDataValidate}