import { useState, useEffect } from 'react';
import api from '../api/client';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let batal = false;
    async function ambilData() {
      try {
        setLoading(true);
        const res = await api.get(url);
        if (!batal) setData(res.data);
      } catch (err) {
        if (!batal) setError(err.message);
      } finally {
        if (!batal) setLoading(false);
      }
    }
    ambilData();
    return () => { batal = true; };
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
