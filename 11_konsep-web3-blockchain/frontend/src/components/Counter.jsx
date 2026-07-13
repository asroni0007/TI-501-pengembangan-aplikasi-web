import { useState } from 'react';

function Counter() {
  const [jumlah, setJumlah] = useState(0);
  return (
    <div>
      <p>Jumlah klik: {jumlah}</p>
      <button onClick={() => setJumlah(jumlah + 1)}>Tambah</button>
      <button onClick={() => setJumlah(0)}>Reset</button>
    </div>
  );
}
export default Counter;
