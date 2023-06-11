import express from "express";
import { getMyProfile, login, logout, register , changePassword, updateProfile,resetPassword ,forgetPassword ,updateProfilePicture} from "../controllers/userController.js";
import {isAuthenticated} from "../middlewares/auth.js"
// import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
// import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// To register a new user
router.route("/register").post(register);

// login
router.route("/login").post(login);

//logout
router.route("/logout").get(logout);

//Get My Profile
router.route("/me").get( isAuthenticated , getMyProfile);


// // Delete my profile
// router.route("/me").delete(isAuthenticated, deleteMyProfile);


//change Password
router.route("/changepassword").put(isAuthenticated, changePassword);

//update the profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//update the profile picture
router.route("/updateprofilepicture").put(isAuthenticated,  updateProfilePicture);

//forget password
router.route("/forgetpassword").post(forgetPassword);


//reset password
router.route("/resetpassword/:token").put(resetPassword);

// //Add to playlist
// router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

// //Remove from playlist
// router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);


// //Admin Routes


// router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);


// router.route("/admin/users/:id").put(isAuthenticated, authorizeAdmin, updateUserRole)
// .delete(isAuthenticated, authorizeAdmin, deleteUser)

export default router;