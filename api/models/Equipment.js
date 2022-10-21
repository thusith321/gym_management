const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        e_id:{
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
        sdate:{
            type:String,
            required:true,
            
        },     
        mobile_no:{
            type:String,
            required:true,
           
        },
        price:{
            type:String,
            required:true,
            
        },
        nitem:{
            type:String,
            required:true,
          
        },
        paid:{
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

module.exports = mongoose.model("Equipment",UserSchema);