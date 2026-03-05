import express from 'express'
import { getallappointment } from '../controllers/appointmentcontroller.js'
import { createappointments } from '../controllers/appointmentcontroller.js'
import { deleteappointments } from '../controllers/appointmentcontroller.js';
const appointmentrouter = express.Router();

appointmentrouter.post('/create', createappointments)
appointmentrouter.get('/', getallappointment)
appointmentrouter.delete('/delete-appointment/:id', deleteappointments)
export default appointmentrouter