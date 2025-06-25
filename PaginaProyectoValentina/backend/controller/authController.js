const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  // Validación básica
  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan campos requeridos' });
  }

  try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { username, password: hashedPassword }
    });

    // No devolver la contraseña hasheada en la respuesta
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({ message: 'Usuario registrado', user: userWithoutPassword });
  } catch (error) {
    console.error('Error al guardar usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = { registerUser };