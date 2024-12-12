const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const foodRoutes = require('./routes/foodRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para analizar JSON
app.use(express.json());

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Definir las rutas de la API
app.use('/api/food', foodRoutes);

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
