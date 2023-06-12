import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Stats } from "../models/Stats.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";



export const contact = catchAsyncError(async(req,res,next)=>{
    const {name,email,message} = req.body;

    if (!name || !email || !message)
    return next(new ErrorHandler("All fields are mandatory", 400));


    const to=process.env.MY_MAIL;
    const subject="Contact from ScholarNet";
    const text=`I, ${name} and my email is ${email} and my message \n ${message}`;

    await sendEmail(to,subject,text);

    res.status(200)
    .json({
        success:true,
        message:"Your message has been sent successfully",

    })
})

export const courseRequest = catchAsyncError(async(req,res,next)=>{
    const {name,email,course} = req.body;

    if (!name || !email || !course)
    return next(new ErrorHandler("All fields are mandatory", 400));


    const to=process.env.MY_MAIL;
    const subject="Requesting for a course on ScholerNet";
    const text=`I, ${name} and my email is ${email} and my course suggestion is \n ${course}`;

    await sendEmail(to,subject,text);

    res.status(200)
    .json({
        success:true,
        message:"Your message has been sent",

    })
    
})


export const getDashboardStats = catchAsyncError(async(req,res,next)=>{
    
   

    res.status(200)
    .json({
        success:true,
        
    });
});