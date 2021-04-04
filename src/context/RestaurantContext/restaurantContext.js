import { createContext } from 'react';
import useRestaurant from './hooks/useRestaurant';

const RestaurantContext = createContext();
const RestaurantProvider = ({ children }) => {
  const { restaurants } = useRestaurant();

  return (
    <RestaurantContext.Provider value={{ restaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };
