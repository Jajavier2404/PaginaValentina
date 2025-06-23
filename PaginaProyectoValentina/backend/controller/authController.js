const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  // Validación básica
  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan campos requeridos' });
  }

  try {
    const user = await prisma.user.create({
      data: { username, password }
    });

    res.status(201).json({ message: 'Usuario registrado', user });
  } catch (error) {
    console.error('Error al guardar usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = { registerUser };
