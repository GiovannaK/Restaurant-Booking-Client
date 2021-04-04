import { createContext } from 'react';
import useProfile from './hooks/useProfile';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const {
    user, userBookings, loading, updateUserInfo,
  } = useProfile();

  return (
    <ProfileContext.Provider value={{
      user, userBookings, loading, updateUserInfo,
    }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
