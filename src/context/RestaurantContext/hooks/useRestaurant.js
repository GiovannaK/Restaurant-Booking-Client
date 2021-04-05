/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CannotFound } from '../../../components/CannotFound';
import { api } from '../../../services/api';

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllRestaurants = async () => {
    try {
      const response = await api.get('/');
      setRestaurants(response.data.restaurants);
      setLoading(false);
    } catch (error) {
      toast.error('Cannot show restaurants');
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/restaurant_categories/');
      setCategory(response.data.restaurantCategories);
      setLoading(false);
    } catch (error) {
      toast.error('Cannot show categories');
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchAllRestaurants();
  }, []);

  return {
    restaurants, category, loading,
  };
};

export default useRestaurant;
