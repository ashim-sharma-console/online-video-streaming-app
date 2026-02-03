const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        inique:true,
    },
    password:{
        type:String,
    }
},
{
    timestamps:true
})

const userModel=mongoose.model('User',userSchema)

module.exports=userModel