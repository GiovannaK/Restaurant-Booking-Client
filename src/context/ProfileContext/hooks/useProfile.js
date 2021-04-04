/* eslint-disable no-new */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { TonalitySharp } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import history from '../../../routes/history';
import { api } from '../../../services/api';

const useProfile = () => {
  const [user, setUser] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserInfo();
    fetchUserBookings();
  }, []);

  const fetchUserInfo = async () => {
    const token = await localStorage.getItem('authToken');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.get('/user/profile', {}, config);
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      toast.error('Cannot show user information');
    }
  };

  const fetchUserBookings = async () => {
    const token = await localStorage.getItem('authToken');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.get('/user_bookings/', {}, config);
      setUserBookings(response.data.userBookings);
      setLoading(false);
    } catch (error) {
      toast.error('Cannot show user bookings');
    }
  };

  const updateUserInfo = async (firstName, lastName, email, phone) => {
    const token = await localStorage.getItem('authToken');
    const config = {
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.put('/user/profile/', {
        firstName, lastName, email, phone,
      }, config);
      setLoading(false);
      toast.info('Informações atualizadas com sucesso.');
    } catch (error) {
      toast.error('Cannot update user information');
    }
  };

  return {
    user, userBookings, loading, updateUserInfo,
  };
};

export default useProfile;
