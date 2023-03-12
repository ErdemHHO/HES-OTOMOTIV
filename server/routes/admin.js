import express from 'express'

import {postCategory,getCategory,getSeries,postSeries,getCar,postCar} from '../controllers/admin.js'

const router=express.Router();

router.get('/category',getCategory);
router.post('/category',postCategory);

router.get('/series',getSeries);
router.post('/series',postSeries);

router.get('/car',getCar);
router.post('/car',postCar);




export default router;