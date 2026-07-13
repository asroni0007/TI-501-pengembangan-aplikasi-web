import { useState } from 'react';

function FormTugas({ onTambah }) {
  const [judul, setJudul] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (!judul.trim()) return;
    onTambah(judul);
    setJudul('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Judul tugas baru" />
      <button type="submit">Tambah</button>
    </form>
  );
}
export default FormTugas;
