import { createContext } from 'react';
import useProfile from './hooks/useProfile';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const { user, userBookings } = useProfile();

  return (
    <ProfileContext.Provider value={{ user, userBookings }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
