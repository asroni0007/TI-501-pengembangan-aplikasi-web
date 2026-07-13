import { useState } from 'react';
import { formatEther } from 'ethers';
import useWallet from '../hooks/useWallet';

function WalletConnect() {
  const { alamat, provider, error, hubungkanWallet } = useWallet();
  const [saldo, setSaldo] = useState(null);

  async function cekSaldo() {
    if (!provider || !alamat) return;
    const saldoWei = await provider.getBalance(alamat);
    setSaldo(formatEther(saldoWei));
  }

  return (
    <div style={{ padding: 12, border: '1px solid #ccc', borderRadius: 8 }}>
      {!alamat ? (
        <button onClick={hubungkanWallet}>🔗 Hubungkan Wallet</button>
      ) : (
        <div>
          <p>Terhubung: {alamat.slice(0, 6)}...{alamat.slice(-4)}</p>
          <button onClick={cekSaldo}>Cek Saldo Testnet</button>
          {saldo && <p>Saldo: {saldo} ETH (testnet)</p>}
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
export default WalletConnect;
