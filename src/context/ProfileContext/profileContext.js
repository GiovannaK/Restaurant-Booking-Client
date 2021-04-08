import { createContext } from 'react';
import useProfile from './hooks/useProfile';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const {
    user,
    userBookings,
    loading,
    updateUserInfo,
    userRestaurants,
    fetchRestaurantDetail,
    userRestaurant,
  } = useProfile();

  return (
    <ProfileContext.Provider value={{
      user,
      userBookings,
      loading,
      updateUserInfo,
      userRestaurants,
      fetchRestaurantDetail,
      userRestaurant,
    }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
