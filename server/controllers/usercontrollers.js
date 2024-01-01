const { usermodel } = require("../model/userSchema");
const bcrypt = require("bcryptjs")

const SignUp = async (req,res) =>{
    try {
        const result = await usermodel.create(req.body);
        res.status(200).json({
            Success:true,
            Message:"SignUp Successfully",
        })
    } catch (error) {
        res.status(400).json({
            Success:false,
            Message:error.message
        })
    }
}

const Login = async (req,res) =>{
    const {username ,password} = req.body;
    try {
        const result = await usermodel.findOne({username}).select('+password');
        if(result && result.username){
            const isMatch = await  bcrypt.compare(password,result.password)

            if(isMatch){
                const token = await result.jwtToken()
                result.password = undefined
                const cookieOption = {
                    maxAge:24 * 60 * 60 * 1000,
                    httOnly:true 
                }
                res.cookie('token',token,cookieOption);
                res.status(200).json({
                    Success:true,
                    data : result
                });
            }else{
                res.status(400).json({
                    Success: false,
                    Message:'Password Incorrect'
                })
            }
        }else{
            res.status(400).json({
                Success: false,
                Message:'No Account Found Associated with this username'
            })
        }

    } catch (error) {
        res.status(400).json({
            Success: false,
            Message: error.message
        })
    }
 }


const getDetailes = async (req,res,) =>{
    const {id,username} = req.user;

    try {
        const result = await usermodel.findOne({username});
        res.status(200).json({
            Success:true,
            data:result
        })
    } catch (error) {
        res.status(200).json({
            Success:false,
            Message:error.message
        })
    }
}
module.exports = {SignUp,Login,getDetailes}