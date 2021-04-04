/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const fetchAllRestaurants = async () => {
    try {
      const response = await api.get('/');
      setRestaurants(response.data.restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    restaurants,
  };
};

export default useRestaurant;
