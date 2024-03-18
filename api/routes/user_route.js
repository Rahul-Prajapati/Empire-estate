import express from 'express';
import { deleteUser, getUserListings, test, updateUser } from '../controllers/user_controllers.js';
import { verifyToken } from '../utils/verifyUser.js';
import { getUser } from '../controllers/accomodation_controllers.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)

export default router;
