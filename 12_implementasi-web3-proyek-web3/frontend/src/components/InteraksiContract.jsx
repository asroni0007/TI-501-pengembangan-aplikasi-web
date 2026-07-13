import { useState } from 'react';
import { Contract } from 'ethers';
import useWallet from '../hooks/useWallet';
import { penyimpanTugasAbi, ALAMAT_CONTRACT } from '../contracts/penyimpanTugasAbi';

function InteraksiContract() {
  const { provider, alamat } = useWallet();
  const [judul, setJudul] = useState('');
  const [hasil, setHasil] = useState('');
  const [status, setStatus] = useState('');

  async function simpanKeBlockchain() {
    if (!provider || !alamat) return setStatus('Hubungkan wallet dahulu.');
    try {
      setStatus('Mengirim transaksi... tunggu konfirmasi di wallet.');
      const signer = await provider.getSigner();
      const contract = new Contract(ALAMAT_CONTRACT, penyimpanTugasAbi, signer);
      const tx = await contract.simpanTugas(judul);
      await tx.wait();
      setStatus('Tersimpan di blockchain ✅');
    } catch (err) {
      setStatus('Gagal: ' + err.message);
    }
  }

  async function bacaDariBlockchain() {
    if (!provider) return;
    const contract = new Contract(ALAMAT_CONTRACT, penyimpanTugasAbi, provider);
    const nilai = await contract.ambilTugas();
    setHasil(nilai);
  }

  return (
    <div style={{ marginTop: 12 }}>
      <input value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Judul tugas untuk disimpan on-chain" />
      <button onClick={simpanKeBlockchain}>Simpan ke Smart Contract</button>
      <button onClick={bacaDariBlockchain}>Baca dari Smart Contract</button>
      <p>{status}</p>
      {hasil && <p>Tersimpan on-chain: {hasil}</p>}
    </div>
  );
}
export default InteraksiContract;
