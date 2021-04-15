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

  useEffect(() => {
    fetchAllSpecialDates();
  }, []);

  return {
    specialDate,
  };
};

export default useBooking;
