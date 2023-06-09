import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Enter Course Name"],
        minLength:[3,"Title must be 3 character long"],
        maxLength:[50,"Title must not be more than 50 character long"],
    },
    
    description:{
        type:String,
        required:[true, "Enter the description of the course"],
        minLength:[15,"course description must be 15 character long"],
    },
    lectures:[
        {
            title:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                required:true,
            },
            video:{
                public_id:{
                    type:String,
                    required:true,
                },
                url:{
                    type:String,
                    required:true,
                },
            }
        }
    ],
    poster:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    },

    views:{
        type:Number,
        default:0,
    },

    numOfViews:{
        type:Number,
        default:0,
        },
        
    category:{
        type:String,
        required:true,
    },

    createdBy:{
        type:String,
        required:[true, "Please enter the name of the course creator"],
    },
    
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

export const Course = mongoose.model("Course", schema);