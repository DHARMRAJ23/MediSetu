import express from 'express'
import { getAllDoctors } from "../controllers/admincontroler.js"

const publicroute = express.Router();

publicroute.get('/doctors', getAllDoctors);
export default publicroute