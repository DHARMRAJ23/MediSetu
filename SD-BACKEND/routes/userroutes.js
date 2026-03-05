import express from 'express'
import { loginUser, getloginuser, updateprofile } from '../controllers/loginController.js'
import { registeruser } from '../controllers/signupController.js'
import authUser from '../middlewares/authuser.js'
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer(); // memory storage

const loginroutes = express.Router()

loginroutes.post('/login', loginUser)
loginroutes.post('/signup', registeruser)
loginroutes.get('/getuser', getloginuser)
loginroutes.put('/update-profile/:id', authUser, upload.single("image"), updateprofile)

export default loginroutes