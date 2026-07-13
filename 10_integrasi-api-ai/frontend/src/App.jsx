import { useState } from 'react';
import Login from './pages/Login';
import DaftarTugas from './pages/DaftarTugas';

function App() {
  const [sudahLogin, setSudahLogin] = useState(!!localStorage.getItem('token'));
  return (
    <div style={{ maxWidth: 480, margin: '0 auto', fontFamily: 'sans-serif' }}>
      {sudahLogin ? <DaftarTugas /> : <Login onLoginSukses={() => setSudahLogin(true)} />}
    </div>
  );
}
export default App;
