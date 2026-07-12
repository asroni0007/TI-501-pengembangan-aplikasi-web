const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'rahasia-praktikum-jangan-dipakai-produksi';

function buatToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

function verifikasiToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { buatToken, verifikasiToken };
