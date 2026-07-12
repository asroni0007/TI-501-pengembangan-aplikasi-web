const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');

router.get('/', async (req, res, next) => {
  try {
    const tugas = await prisma.tugas.findMany({ orderBy: { id: 'asc' } });
    res.json(tugas);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const tugas = await prisma.tugas.findUnique({ where: { id: Number(req.params.id) } });
    if (!tugas) return res.status(404).json({ error: 'Tugas tidak ditemukan' });
    res.json(tugas);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { judul } = req.body;
    if (!judul) return res.status(400).json({ error: 'Judul wajib diisi' });
    const tugasBaru = await prisma.tugas.create({ data: { judul } });
    res.status(201).json(tugasBaru);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const tugas = await prisma.tugas.update({
      where: { id: Number(req.params.id) },
      data: { selesai: req.body.selesai },
    });
    res.json(tugas);
  } catch (err) {
    if (err.code === 'P2025') return res.status(404).json({ error: 'Tugas tidak ditemukan' });
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await prisma.tugas.delete({ where: { id: Number(req.params.id) } });
    res.status(204).send();
  } catch (err) {
    if (err.code === 'P2025') return res.status(404).json({ error: 'Tugas tidak ditemukan' });
    next(err);
  }
});

module.exports = router;
