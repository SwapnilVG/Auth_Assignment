const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
        minLength:[7,'Name must be at least 7 char'],
        maxLength:[30,'Name must be less than 30 char'],
        trim:true
        },
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[7,'Name must be at least 7 char'],
        maxLength:[15,'Name must be less than 15 char'],
        unique:[true,'already registered'],
        trim:true
    },
    email:{
        type:String,
        required:[true," user email is required"],
        trim:true,
        lowercase:true,
        unique:[true,'already registered']
    },
    password:{
        type: String,
        required:[true , 'Password is required'],
        select:false
        
    },
    bio:{
        type :String,
        required:true,
    }    
},{
    timestamps: true
}); 

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,12)
    return next();
})

userSchema.methods = {
    jwtToken(){
        return JWT.sign({id:this._id, username:this.username},
            process.env.SECRET,{
                expiresIn:'24h'
            })
    }
}
const usermodel = mongoose.model('user',userSchema)
module.exports={usermodel}