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

  const updateRestaurantInfo = async (id, companyName, restaurantCnpj,
    phone, capacity, address, isWifi, isParking, isOpen, businessDayStartHours,
    businessDayFinalHours, weekendStartHours, weekendFinalHours) => {
    const token = await localStorage.getItem('authToken');
    const config = {
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.put(`/restaurant/${id}`, {
        companyName,
        restaurantCnpj,
        phone,
        capacity,
        address,
        isWifi,
        isParking,
        isOpen,
        businessDayStartHours,
        businessDayFinalHours,
        weekendStartHours,
        weekendFinalHours,
      }, config);
    } catch (error) {
      toast.error('Cannot update informations');
    }
  };

  const deleteRestaurantImages = async (id) => {
    const token = await localStorage.getItem('authToken');
    const config = {
      header: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.delete(`/images/${id}`, {}, config);
    } catch (error) {
      toast.error('Cannot show images');
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllRestaurants();
  }, []);
  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    restaurants, category, loading, updateRestaurantInfo, deleteRestaurantImages,
  };
};

export default useRestaurant;
