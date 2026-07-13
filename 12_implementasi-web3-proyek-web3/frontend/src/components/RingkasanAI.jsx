import { useState } from 'react';
import api from '../api/client';

function RingkasanAI() {
  const [ringkasan, setRingkasan] = useState('');
  const [loading, setLoading] = useState(false);

  async function mintaRingkasan() {
    setLoading(true);
    try {
      const res = await api.get('/ai/ringkasan');
      setRingkasan(res.data.ringkasan);
    } catch (err) {
      setRingkasan('Gagal mengambil ringkasan AI.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ marginTop: 16, padding: 12, background: '#f5f5f5', borderRadius: 8 }}>
      <button onClick={mintaRingkasan} disabled={loading}>
        {loading ? 'Meringkas...' : '✨ Ringkas dengan AI'}
      </button>
      {ringkasan && <p>{ringkasan}</p>}
    </div>
  );
}
export default RingkasanAI;
