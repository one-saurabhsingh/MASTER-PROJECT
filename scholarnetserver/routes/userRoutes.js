import express from "express";
import { addToPlaylist, changePassword, forgetPassword, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateProfilePicture } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.route("/register").post(register);

//login
router.route("/login").post(login);

//logout
router.route("/logout").post(logout);

//Get My Profile
router.route("/me").get(isAuthenticated, getMyProfile);

//change Password
router.route("/changepassword").put(isAuthenticated, changePassword);

//update the profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//update the profile picture
router.route("/updateprofilepicture").put(isAuthenticated, updateProfilePicture);

//forget password
router.route("/forgetpassword").post(forgetPassword);


//reset password
router.route("/resetpassword/:token").put(resetPassword);

//Add to playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

//Remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);




export default router;