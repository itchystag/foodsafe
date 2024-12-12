const express = require('express');
const router = express.Router();
const Food = require('../models/food');

router.post('/', async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (error) {
    console.error('Error en POST /api/food:', error);
    res.status(500).json({ message: 'Error al agregar alimento.', error: error.message });
  }
});

// Ruta para obtener la lista de alimentos
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
