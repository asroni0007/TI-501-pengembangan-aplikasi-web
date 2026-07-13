# Source Code Praktikum — Pengembangan Aplikasi Web (TI-501)

Struktur folder mengikuti urutan 16 pertemuan RPS. Setiap folder `NN_topik/` berisi
**kode kumulatif** sampai dengan pertemuan tersebut (folder 15 = kondisi kode paling lengkap
sebelum UAS). Folder tanpa kode (01, 06, 08, 16) berisi `README.md` penjelasan sesi.

| Folder | Pertemuan | Isi |
|---|---|---|
| `01_pengantar-evolusi-web` | 1 | Diskusi (tanpa kode) |
| `02_nodejs-dasar` | 2 | Node.js: module system, event loop |
| `03_expressjs-rest-api` | 3 | Express.js: routing, middleware, REST API |
| `04_prisma-orm-database` | 4 | Prisma ORM (database SQLite, dikunci v6) |
| `05_jwt-auth-proyek-backend` | 5 | JWT Auth + **Proyek Backend (12%)** |
| `06_perancangan-arsitektur-proposal` | 6 | Presentasi proposal (tanpa kode) |
| `07_react-dasar` | 7 | ReactJS: component, props, state |
| `08_UTS` | 8 | Ujian Tengah Semester |
| `09_react-hooks-api-proyek-frontend` | 9 | React Hooks, konsumsi API + **Proyek Frontend (8%)** |
| `10_integrasi-api-ai` | 10 | Integrasi API AI (OpenAI/Claude) + **Proyek AI (6%)** |
| `11_konsep-web3-blockchain` | 11 | Konsep Web 3.0, demo blockchain, smart contract |
| `12_implementasi-web3-proyek-web3` | 12 | Wallet, Ethers.js + **Proyek Web3 (9%)** |
| `13_testing-jest` | 13 | Unit testing dengan Jest |
| `14_eslint-code-quality` | 14 | ESLint (flat config) & code quality |
| `15_deployment-evaluasi` | 15 | Deployment & evaluasi performa — **kode paling lengkap** |
| `16_UAS` | 16 | Ujian Akhir Semester |

## Cara pakai tiap folder berkode

Tiap folder berisi `backend/` dan/atau `frontend/` yang independen dan bisa langsung dijalankan:

```bash
cd 05_jwt-auth-proyek-backend/backend
npm install
cp .env.example .env   # isi JWT_SECRET dll
npx prisma migrate dev --name init
npm run dev
```

```bash
cd 09_react-hooks-api-proyek-frontend/frontend
npm install
npm run dev
```

## Catatan versi (berlaku di semua folder backend)

- Prisma dikunci ke **v6** — Prisma 7 (rilis November 2025) mengubah API inti dan tidak kompatibel dengan kode di rundown ini.
- ESLint pakai **flat config** (`eslint.config.js`) sesuai standar ESLint 9+.

## Riwayat pengembangan (versi git, opsional)

Versi ber-riwayat-git (satu commit per pertemuan, bisa `git log`/`git checkout` per titik waktu)
tersedia terpisah sebagai `source-code-praktikum-TI501.zip` / repo `aplikasi-web-praktikum/`.
Struktur folder bernomor di sini dibuat dari riwayat commit yang sama, hanya disajikan ulang
sebagai folder statis per pertemuan untuk kemudahan navigasi.
