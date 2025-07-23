import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

export function useApi(endpoint, method = 'GET', body = null, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(method === 'GET');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (method === 'GET') {
      setLoading(true);
      axios[method.toLowerCase()](`${API_URL}${endpoint}`)
        .then((res) => setData(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const sendRequest = (payload) => {
    setLoading(true);
    return axios[method.toLowerCase()](`${API_URL}${endpoint}`, payload)
      .then((res) => {
        setData(res.data);
        return res.data;
      })
      .catch((err) => {
        setError(err);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  return { data, loading, error, sendRequest };
}
