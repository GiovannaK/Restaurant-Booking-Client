/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import history from '../../../routes/history';
import { api } from '../../../services/api';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    try {
      const tokenDecoded = jwtDecode(token);
      const currentDate = new Date();
      if (tokenDecoded.exp * 1000 < currentDate.getTime()) {
        setAuthenticated(false);
        setLoading(false);
        history.push('/login');
      }
    } catch (error) {
      return null;
    }

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, [authenticated]);

  const handleLogin = async (email, password) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await api.post(
        '/session/login',
        { email, password },
        config,
      );

      localStorage.setItem('authToken', JSON.stringify(data.token));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      setAuthenticated(true);
      setLoading(false);
      history.push('/dashboard');
    } catch (error) {
      toast.error('E-mail ou senha inválidos');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('authToken');
    api.defaults.headers.Authorization = undefined;
    setLoading(false);
    history.push('/login');
  };

  return {
    authenticated, loading, handleLogin, handleLogout,
  };
};

export default useAuth;
