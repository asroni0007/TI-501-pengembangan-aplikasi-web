const express = require('express');
const router = express.Router();

let daftarTugas = [
  { id: 1, judul: 'Belajar Express.js', selesai: false },
  { id: 2, judul: 'Belajar Prisma ORM', selesai: false },
];

router.get('/', (req, res) => {
  res.json(daftarTugas);
});

router.get('/:id', (req, res) => {
  const tugas = daftarTugas.find(t => t.id === Number(req.params.id));
  if (!tugas) return res.status(404).json({ error: 'Tugas tidak ditemukan' });
  res.json(tugas);
});

router.post('/', (req, res) => {
  const { judul } = req.body;
  if (!judul) return res.status(400).json({ error: 'Judul wajib diisi' });
  const tugasBaru = { id: daftarTugas.length + 1, judul, selesai: false };
  daftarTugas.push(tugasBaru);
  res.status(201).json(tugasBaru);
});

router.put('/:id', (req, res) => {
  const tugas = daftarTugas.find(t => t.id === Number(req.params.id));
  if (!tugas) return res.status(404).json({ error: 'Tugas tidak ditemukan' });
  tugas.selesai = req.body.selesai ?? tugas.selesai;
  res.json(tugas);
});

router.delete('/:id', (req, res) => {
  daftarTugas = daftarTugas.filter(t => t.id !== Number(req.params.id));
  res.status(204).send();
});

module.exports = router;
