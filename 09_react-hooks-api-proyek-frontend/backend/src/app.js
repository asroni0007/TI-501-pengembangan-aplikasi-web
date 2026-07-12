const express = require('express');
const cors = require('cors');
const app = express();

const requestLogger = require('./middlewares/logger');
const wajibLogin = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const authRouter = require('./routes/auth.routes');
const tugasRouter = require('./routes/tugas.routes');

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => res.json({ pesan: 'API Pengembangan Aplikasi Web aktif' }));
app.use('/api/auth', authRouter);
app.use('/api/tugas', wajibLogin, tugasRouter);

app.use(errorHandler);

module.exports = app;
