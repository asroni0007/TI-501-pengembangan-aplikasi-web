import { useState } from 'react';
import { BrowserProvider } from 'ethers';

function useWallet() {
  const [alamat, setAlamat] = useState(null);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState('');

  async function hubungkanWallet() {
    if (!window.ethereum) {
      setError('Wallet browser (mis. MetaMask) tidak terdeteksi. Silakan pasang ekstensinya.');
      return;
    }
    try {
      const browserProvider = new BrowserProvider(window.ethereum);
      const accounts = await browserProvider.send('eth_requestAccounts', []);
      setProvider(browserProvider);
      setAlamat(accounts[0]);
      setError('');
    } catch (err) {
      setError('Gagal terhubung ke wallet: ' + err.message);
    }
  }
  return { alamat, provider, error, hubungkanWallet };
}
export default useWallet;
