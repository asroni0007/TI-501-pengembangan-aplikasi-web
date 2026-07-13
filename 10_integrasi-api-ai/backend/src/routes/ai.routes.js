const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { ringkasTugas } = require('../services/ai.service');

router.get('/ringkasan', async (req, res, next) => {
  try {
    const semuaTugas = await prisma.tugas.findMany();
    if (semuaTugas.length === 0) {
      return res.json({ ringkasan: 'Belum ada tugas untuk diringkas.' });
    }
    const judulSaja = semuaTugas.map((t) => `- ${t.judul}`);
    const hasil = await ringkasTugas(judulSaja);
    res.json({ ringkasan: hasil });
  } catch (err) {
    console.error('Gagal memanggil API AI:', err.message);
    res.status(502).json({ error: 'Layanan AI sedang tidak tersedia, coba lagi nanti' });
  }
});

module.exports = router;
