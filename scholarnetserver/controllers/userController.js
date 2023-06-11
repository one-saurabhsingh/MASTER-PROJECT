import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import {User} from "../models/User.js"
import { sendTokens } from "../utils/sendToken.js";


export const register = catchAsyncError(async(req,res,next) => {
    const {name, email, password } = req.body;

    // const file = req.file;

    if( !name || !email || !password)
    return next(new ErrorHandler("All fields are mandatory", 400));

    let user = await User.findOne({ email });

    if(user) return next(new ErrorHandler("User Already Exists", 409));

    // Upload file on cloudinary;

    user = await User.create({
        name, email, password,
        avatar: {
            public_id: "tempid",
            url: "tempurl",
        },
    });

   sendTokens(res,user, "Registered Successfully", 201 )

});



export const login = catchAsyncError(async (req,res,next) => {

const {email,password} =req.body;

//const file =req.file;

if(!email || !password)
return next(new ErrorHandler("Please enter all field",400));


const user = await User.findOne({email}).select("+password");

if(!user)
return next(new ErrorHandler("Incorrect email or Password", 401));

const isMatch = await user.comparePassword(password);
     
if(!isMatch)
return next(new ErrorHandler("Incorrect email or Password", 401));



sendTokens(res,user,`Welcome Back, ${user.name}`,200);

} )

export const logout = catchAsyncError(async(req,res, next) => {
    res
    .status(200)
    .cookie("token", null, {
        expires: new Date(Date.now()),
    })
    .json({
        success: true,
        message: "Logged Out Successfully ! ",
    })
} )

export const getMyProfile = catchAsyncError(async(req,res,next)=>{

    const user = await User.findById(req.user._id);
    res
    .status(200)
    .json({
        success:true,
        user,
    })
})

export const changePassword = catchAsyncError(async(req,res,next)=>{

    const {oldPassword,newPassword}=req.body;

    if(!oldPassword || !newPassword)
return next(new ErrorHandler("Please enter all the fields",400));

    const user= await User.findById(req.user._id).select("+password");

    const isMatch = await user.comparePassword(oldPassword);
     
    if(!isMatch)
    return next(new ErrorHandler("Old Password is not matching", 400));

    user.password = newPassword;
    await user.save();

    res
    .status(200)
    .json({
        success:true,
        message:"Password changed successfully",
    })
})

export const updateProfile = catchAsyncError(async(req,res,next)=>{

    const {name,email}=req.body;


    const user= await User.findById(req.user._id).select("+password");

    if(name) user.name=name;
    if(email) user.email=email;
   
    await user.save();
    res
    .status(200)
    .json({
        success:true,
        message:"Profile Updated Successfully",
    })
})

export const updateProfilePicture = (async(req,res,next)=>{

//     //cloudinary todo
// const file=req.file;

// const user= await User.findById(req.user._id);


// const fileUri =getDataUri(file);
// const mycloud= await cloudinary.v2.uploader.upload(fileUri.content);

// await cloudinary.v2.uploader.destroy(user.avatar.public_id);

// user.avatar = {
//     public_id:mycloud.public_id,
//     url:mycloud.secure_url,
// }

// await user.save();

    res.status(200)
    .json({
        success:true,
        message:"Updated Profile Picture Successfully",
    })
    
})

export const forgetPassword = (async(req,res,next)=>{

   const {email} = req.body;

   const user = await User.findOne({email});

   if(!user) return (next(new ErrorHandler("User Not Found"),400));

   const resetToken  = await user.getResetToken();

   await user.save();

   //send a token Via Email
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
   const message=  `click on the link to reset the password. ${url}. If not requested please ignore`;

  await sendEmail(user.email,"app-course reset Password",message);

    res.status(200)
    .json({
        success:true,
        message:`Reset password Token has been sent to ${user.email}`,
    })
    
})

export const resetPassword = (async(req,res,next)=>{

  const {token} = req.params;

  const resetPasswordToken= 
  crypto.createHash("sha256")
  .update(token)
  .digest("hex");

   const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire:{
        $gt: Date.now(),
    },
   })

    if(!user) return next(new ErrorHandler("Please enter valid token number",401));

    user.password=req.body.password;
    user.resetPasswordExpire=undefined;
    user.resetPasswordToken=undefined;

    await user.save();

    res.status(200)
    .json({
        success:true,
        message:"Password Updated Successfully",
    })
    
})
