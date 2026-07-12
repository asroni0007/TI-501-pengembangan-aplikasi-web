import { useState } from 'react';
import api from '../api/client';

function Login({ onLoginSukses }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      onLoginSukses();
    } catch (err) {
      setError('Login gagal: email atau password salah');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Masuk</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Masuk</button>
    </form>
  );
}
export default Login;
