/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import socketio from 'socket.io-client';
import { api } from '../../../services/api';

const useBooking = () => {
  const [bookingSpecialDate, setBookingSpecialDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userBookings, setUserBookings] = useState([]);

  const decodedUserToken = () => {
    const userToken = localStorage.getItem('authToken');
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      return decodedToken.id;
    }
    return null;
  };

  const user = decodedUserToken();

  const connectionOptions = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
    query: { user },
  };

  const getBookingStatus = () => {
    const socket = socketio(`${process.env.REACT_APP_BASE_URL}`, connectionOptions);
    socket.on('booking_response', (booking) => {
      setUserBookings((userBookings) => userBookings.map((item) => {
        if (item._id === booking._id) {
          return {
            ...item, approved: booking.approved,
          };
        }
        return item;
      }));
    });
  };

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

  const createReview = async (id, comment, rating) => {
    const token = await localStorage.getItem('authToken');
    const config = {
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await api.post(`/review/${id}`, {
        comment, rating,
      }, config);
      toast.info('Avaliação enviada');
    } catch (error) {
      toast.error('Não foi possível salvar sua avaliação de reserva');
    }
  };

  useEffect(() => {
    fetchAllSpecialDates();
  }, []);

  useEffect(() => {
    fetchUserBookings();
  }, [userBookings.length]);

  return {
    bookingSpecialDate,
    requestBooking,
    loading,
    userBookings,
    getBookingStatus,
    createReview,
  };
};

export default useBooking;
