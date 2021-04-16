/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';

const useBooking = () => {
  const [specialDate, setSpecialDate] = useState([]);

  const fetchAllSpecialDates = async () => {
    try {
      const response = await api.get('/special_dates/');
      setSpecialDate(response.data.specialDates);
      localStorage.setItem('specialDates', JSON.stringify(response.data.specialDates));
    } catch (error) {
      toast.error('Algo deu errado!');
    }
  };

  const requestBooking = async (id, hours, date, bookingSpecialDate, table, extras) => {
    const token = await localStorage.getItem('authToken');
    const config = {
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.post(`/booking/${id}`, {
        hours, date, bookingSpecialDate, table, extras,
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
    specialDate, requestBooking,
  };
};

export default useBooking;
