const { verifikasiToken } = require('../lib/jwt');

function wajibLogin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token tidak ditemukan' });

  const token = authHeader.split(' ')[1];
  try {
    const payload = verifikasiToken(token);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token tidak valid atau kedaluwarsa' });
  }
}

module.exports = wajibLogin;
