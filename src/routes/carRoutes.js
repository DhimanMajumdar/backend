const express = require('express');
const { createCar, getCars, getCarById, updateCar, deleteCar } = require('../controllers/carController');
const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/', authMiddleware,createCar);
router.get('/', authMiddleware, getCars);
router.get('/:id', authMiddleware, getCarById);
router.put('/:id', authMiddleware,updateCar); 
router.delete('/:id', authMiddleware, deleteCar);

module.exports = router;
