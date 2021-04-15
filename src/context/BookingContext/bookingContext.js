import { createContext } from 'react';
import useBooking from './hooks/useBooking';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const { specialDate } = useBooking();

  return (
    <BookingContext.Provider value={{ specialDate }}>
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProvider };
