import { createContext } from 'react';
import useRestaurant from './hooks/useRestaurant';

const RestaurantContext = createContext();
const RestaurantProvider = ({ children }) => {
  const {
    restaurants, category, loading,
    updateRestaurantInfo,
    deleteRestaurantImages,
    createRestaurant,
    fetchAdresses,
    latitude,
    longitude,
    apiAddresses,
    setRestaurants,
  } = useRestaurant();

  return (
    <RestaurantContext.Provider value={{
      restaurants,
      category,
      loading,
      updateRestaurantInfo,
      deleteRestaurantImages,
      createRestaurant,
      fetchAdresses,
      latitude,
      longitude,
      apiAddresses,
      setRestaurants,
    }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };
