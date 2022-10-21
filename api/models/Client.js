const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        user_id:{
            type:String,
            required:true,
            unique:true,
        },
        name:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
           
        },
        email:{
            type:String,
            required:true,
            
        },
        gender:{
            type:String,
            required:true,
            
        },     
        mobile_no:{
            type:String,
            required:true,
           
        },
        nic:{
            type:String,
            required:true,
            
        },
        age:{
            type:String,
            required:true,
          
        },
        payment_method:{
            type:String,
            required:true,
            
        },
        programs:{
            type:String,
            required:true,
           
        },
        trainer:{
            type:String,
            required:true,
            
        },
        profile_pic:{
            type:String,
            default:"",
        },
        code:{
            type: Number,
            required:true
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("Client",UserSchema);