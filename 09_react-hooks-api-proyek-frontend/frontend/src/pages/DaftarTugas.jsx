import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import api from '../api/client';

function DaftarTugas() {
  const { data: tugas, loading, error } = useFetch('/tugas');
  const [judulBaru, setJudulBaru] = useState('');

  async function tambahTugas(e) {
    e.preventDefault();
    await api.post('/tugas', { judul: judulBaru });
    setJudulBaru('');
    window.location.reload();
  }

  if (loading) return <p>Memuat...</p>;
  if (error) return <p style={{ color: 'red' }}>Gagal memuat: {error}</p>;

  return (
    <div>
      <h2>Daftar Tugas</h2>
      <form onSubmit={tambahTugas}>
        <input value={judulBaru} onChange={(e) => setJudulBaru(e.target.value)} placeholder="Tugas baru" />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {tugas.map((t) => (
          <li key={t.id}>{t.judul} — {t.selesai ? 'Selesai' : 'Belum'}</li>
        ))}
      </ul>
    </div>
  );
}
export default DaftarTugas;
