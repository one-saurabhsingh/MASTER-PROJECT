import express from "express";
import { addLectures, createCourse, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";


const router = express.Router();

//get all courses without lectures

router.route("/courses").get(getAllCourses);

//for creating course - only admin

router.route("/createcourse").post(singleUpload ,createCourse);


// Add Lecture, Delete Course, Get Course Details

router.route("/course/:id").get(getCourseLectures).post(singleUpload , addLectures);

router.route("/course")

export default router;