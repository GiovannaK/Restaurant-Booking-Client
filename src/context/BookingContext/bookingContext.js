import { createContext } from 'react';
import useBooking from './hooks/useBooking';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const {
    bookingSpecialDate, requestBooking,
    loading, userBookings, getBookingStatus, createReview,
  } = useBooking();

  return (
    <BookingContext.Provider value={{
      bookingSpecialDate,
      requestBooking,
      loading,
      userBookings,
      getBookingStatus,
      createReview,
    }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProvider };
