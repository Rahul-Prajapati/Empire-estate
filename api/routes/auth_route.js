import express from 'express';
import { signup } from '../controllers/auth_controllers.js';

const router = express.Router();

router.post("/signup", signup);

export default router;
