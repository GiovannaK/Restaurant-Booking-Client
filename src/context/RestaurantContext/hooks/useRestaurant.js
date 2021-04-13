/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import history from '../../../routes/history';
import { api } from '../../../services/api';

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [apiAddresses, setApiAddresses] = useState([]);

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
      localStorage.setItem('restaurantCategory', JSON.stringify(response.data.restaurantCategories));
      setLoading(false);
    } catch (error) {
      toast.error('Cannot show categories');
    }
  };

  const fetchAdresses = async (address) => {
    try {
      const result = await axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${process.env.REACT_APP_HERE_KEY}`);
      setApiAddresses(result.data.items.map((val) => val.title));
      const getLong = (result.data.items.forEach((val) => {
        setLongitude(val.position.lng);
      }));
      const getLat = (result.data.items.forEach((val) => {
        setLatitude(val.position.lat);
      }));
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const createRestaurant = async (companyName, cnpj, phone,
    capacity, address, isParking, isWifi, businessDayStartHours,
    businessDayFinalHours, weekendStartHours, weekendFinalHours,
    restaurantCategory, latitude, longitude) => {
    const token = await localStorage.getItem('authToken');
    const config = {
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await api.post('/restaurant/register_restaurant', {
        companyName,
        cnpj,
        phone,
        capacity,
        address,
        isParking,
        isWifi,
        businessDayStartHours,
        businessDayFinalHours,
        weekendStartHours,
        weekendFinalHours,
        restaurantCategory,
        latitude,
        longitude,
      }, config);
    } catch (error) {
      toast.error('Cannot create restaurant');
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
    }
  };

  useEffect(() => {
    fetchAllRestaurants();
  }, []);
  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    restaurants,
    category,
    loading,
    updateRestaurantInfo,
    deleteRestaurantImages,
    createRestaurant,
    fetchAdresses,
    latitude,
    longitude,
    apiAddresses,
  };
};

export default useRestaurant;
