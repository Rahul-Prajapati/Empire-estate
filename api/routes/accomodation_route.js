import express from 'express';
import { createListing, deleteListing, getListing, updateListing, getListingofUser } from '../controllers/accomodation_controllers.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListingofUser);
export default router;