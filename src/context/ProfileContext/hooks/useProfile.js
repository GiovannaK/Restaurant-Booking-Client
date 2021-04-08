/* eslint-disable no-new */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';

const useProfile = () => {
  const [user, setUser] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [userRestaurants, setUserRestaurants] = useState([]);
  const [userRestaurant, setUserRestaurant] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUserInfo = async () => {
    const token = await localStorage.getItem('authToken');

    if (token) {
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
    }
  };

  const fetchUserBookings = async () => {
    const token = await localStorage.getItem('authToken');

    if (token) {
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
    }
  };

  const fetchUserRestaurants = async () => {
    const token = await localStorage.getItem('authToken');
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await api.get('/restaurant/', {}, config);
        setUserRestaurants(response.data.restaurants);
        setLoading(false);
      } catch (error) {
        toast.error('Cannot show user restaurants');
      }
    }
  };

  const fetchRestaurantDetail = async (id) => {
    const token = await localStorage.getItem('authToken');

    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await api.get(`/restaurant/${id}`, {}, config);
        localStorage.setItem('userRestaurantDetail', JSON.stringify(response.data.restaurant));
        setUserRestaurant(response.data.restaurant);
        setLoading(false);
      } catch (error) {
        toast.error('Cannot show restaurant information');
      }
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

  useEffect(() => {
    fetchUserInfo();
    fetchUserBookings();
    fetchUserRestaurants();
  }, []);

  return {
    user,
    userBookings,
    loading,
    updateUserInfo,
    userRestaurants,
    fetchRestaurantDetail,
    userRestaurant,
  };
};

export default useProfile;
