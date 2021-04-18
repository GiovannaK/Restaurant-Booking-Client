/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';

const useBooking = () => {
  const [bookingSpecialDate, setBookingSpecialDate] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllSpecialDates = async () => {
    try {
      const response = await api.get('/special_dates/');
      setBookingSpecialDate(response.data.specialDates);
      localStorage.setItem('specialDates', JSON.stringify(response.data.specialDates));
      setLoading(false);
    } catch (error) {
      toast.error('Algo deu errado!');
    }
  };

  const requestBooking = async (id, hours, date, specialDate, table, extras) => {
    const token = await localStorage.getItem('authToken');
    const config = {
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.post(`/booking/${id}`, {
        hours, date, specialDate, table, extras,
      },
      config);
      setLoading(false);
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar fazer uma reserva neste restaurante');
    }
  };

  const fetchRestaurantBookings = async (id) => {
    const userToken = localStorage.getItem('authToken');
    const config = {
      Authorization: `Bearer ${userToken}`,
    };
    try {
      const response = await api.get(`/restaurant_bookings/${id}`, {}, config);
      setBookings(response.data.restaurantBooking);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao mostrar as solicitações de reserva');
    }
  };

  useEffect(() => {
    fetchAllSpecialDates();
  }, []);

  return {
    bookingSpecialDate, requestBooking, fetchRestaurantBookings, loading, bookings,
  };
};

export default useBooking;
