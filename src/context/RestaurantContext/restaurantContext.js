import { createContext } from 'react';
import useRestaurant from './hooks/useRestaurant';

const RestaurantContext = createContext();
const RestaurantProvider = ({ children }) => {
  const { restaurants, category, loading } = useRestaurant();

  return (
    <RestaurantContext.Provider value={{ restaurants, category, loading }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };
