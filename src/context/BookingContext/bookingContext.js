import { createContext } from 'react';
import useBooking from './hooks/useBooking';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const { bookingSpecialDate, requestBooking } = useBooking();

  return (
    <BookingContext.Provider value={{ bookingSpecialDate, requestBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProvider };
