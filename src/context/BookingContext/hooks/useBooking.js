/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';

const useBooking = () => {
  const [bookingSpecialDate, setBookingSpecialDate] = useState([]);

  const fetchAllSpecialDates = async () => {
    try {
      const response = await api.get('/special_dates/');
      setBookingSpecialDate(response.data.specialDates);
      localStorage.setItem('specialDates', JSON.stringify(response.data.specialDates));
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
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar fazer uma reserva neste restaurante');
    }
  };

  useEffect(() => {
    fetchAllSpecialDates();
  }, []);

  return {
    bookingSpecialDate, requestBooking,
  };
};

export default useBooking;
