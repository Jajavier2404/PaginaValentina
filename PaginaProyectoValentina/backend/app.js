const express = require('express');
const cors = require('cors');
const authRouter = require('./Router/authRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter); // Ruta para login

module.exports = app;
