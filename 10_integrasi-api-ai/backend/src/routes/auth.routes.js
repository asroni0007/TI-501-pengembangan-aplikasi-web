const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const prisma = require('../lib/prisma');
const { buatToken } = require('../lib/jwt');

router.post('/register', async (req, res, next) => {
  try {
    const { nama, email, password } = req.body;
    if (!nama || !email || !password) {
      return res.status(400).json({ error: 'nama, email, dan password wajib diisi' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { nama, email, password: passwordHash },
    });

    res.status(201).json({ id: user.id, nama: user.nama, email: user.email });
  } catch (err) {
    if (err.code === 'P2002') return res.status(409).json({ error: 'Email sudah terdaftar' });
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Email atau password salah' });

    const cocok = await bcrypt.compare(password, user.password);
    if (!cocok) return res.status(401).json({ error: 'Email atau password salah' });

    const token = buatToken({ userId: user.id, email: user.email });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
