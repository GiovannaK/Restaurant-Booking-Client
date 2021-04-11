import { createContext } from 'react';
import useRestaurant from './hooks/useRestaurant';

const RestaurantContext = createContext();
const RestaurantProvider = ({ children }) => {
  const {
    restaurants, category, loading, updateRestaurantInfo, deleteRestaurantImages,
  } = useRestaurant();

  return (
    <RestaurantContext.Provider value={{
      restaurants, category, loading, updateRestaurantInfo, deleteRestaurantImages,
    }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };
