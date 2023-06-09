import mongoose from "mongoose";
import validator from "validator";
import jwt  from "jsonwebtoken";

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter Your Name"],
    },
    email:{
        type: String,
        required:[true,"Enter Your Email"],
        unique: true,
        validate: validator.isEmail,
    },
    password:{
        type: String,
        required:[true,"Enter Your Password"],
        minLength:[6,"Pasword should be atleast 6 characters long"],
        select: false,
    },
    role:{
        type: String,
        enum:["admin","user"],
        default: "user",
    },
    subscription: {
        id: String,
        status: String,
    },
    
    avatar: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },

      playlist: [
        {
          course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
          },
          poster: String,
        },
      ],
    
      createdAt: {
        type: Date,
        default: Date.now,
      },
    
      resetPasswordToken: String,
      resetPasswordExpire: String,

});


schema.methods.getJWTToken = function (){
  return jwt.sign({_id: this._id},process.env.JWT_SECRET,{
    expiresIn: "15d",
  });
};



export const User = mongoose.model("User", schema);