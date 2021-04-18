import { createContext } from 'react';
import useBooking from './hooks/useBooking';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const {
    bookingSpecialDate, requestBooking, fetchRestaurantBookings, loading, bookings,
  } = useBooking();

  return (
    <BookingContext.Provider value={{
      bookingSpecialDate, requestBooking, fetchRestaurantBookings, loading, bookings,
    }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProvider };
