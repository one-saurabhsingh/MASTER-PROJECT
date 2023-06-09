import express from "express";
import { register } from "../controllers/userController.js";



const router = express.Router();

router.route("/register").post(register);

//login
// router.route("/login").post(login);



export default router;