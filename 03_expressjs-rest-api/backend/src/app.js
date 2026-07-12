const express = require('express');
const app = express();

const requestLogger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const tugasRouter = require('./routes/tugas.routes');

app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
  res.json({ pesan: 'API Pengembangan Aplikasi Web aktif' });
});

app.use('/api/tugas', tugasRouter);

app.use(errorHandler);

module.exports = app;
