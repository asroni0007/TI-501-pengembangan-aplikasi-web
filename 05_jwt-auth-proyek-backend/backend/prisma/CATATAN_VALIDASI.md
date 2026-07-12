# Catatan validasi Prisma

Kode di folder ini (schema.prisma, lib/prisma.js, routes/tugas.routes.js) sudah divalidasi:
- Sintaks schema & JS: valid.
- Logika CRUD & error handling (P2025/P2002): sudah diuji lewat mock yang meniru API @prisma/client persis (lihat riwayat percakapan pengembangan), 20/20 skenario lulus.
- **Belum diuji:** eksekusi nyata `npx prisma migrate dev` — di lingkungan pengembangan kode ini, domain unduhan engine Prisma (binaries.prisma.sh) diblokir jaringan. Di komputer mahasiswa dengan akses internet normal, langkah ini seharusnya berjalan seperti biasa.

Versi Prisma **dikunci ke v6** (lihat package.json) karena Prisma 7 (rilis November 2025) mengubah API inti (butuh driver adapter, tidak lagi `new PrismaClient()` polos).
