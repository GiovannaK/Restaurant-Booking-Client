import React, { useReducer } from 'react';
import { GET_RESTAURANTS, HOME_RESTAURANTS_ERROR, SHOW_RESTAURANT } from './HomeActions';
import HomeReducer from './HomeReducer';
import HomeContext from './index';
import { api } from '../../services/api';

export const HomeState = ({ children }) => {
  const initialState = {
    homeRestaurants: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(HomeReducer, initialState);

  const getAllRestaurants = async () => {
    try {
      const response = await api.get('/');
      dispatch({
        type: GET_RESTAURANTS,
        payload: response.data.restaurants,
      });
    } catch (error) {
      dispatch({
        type: HOME_RESTAURANTS_ERROR,
        payload: error,
      });
    }
  };

  const showRestaurant = async (id) => {
    try {
      const response = await api.get(`/${id}`);
      dispatch({
        type: SHOW_RESTAURANT,
        payload: response.data.restaurant,
      });
    } catch (error) {
      dispatch({
        type: HOME_RESTAURANTS_ERROR,
        payload: error,
      });
    }
  };

  return (
    <HomeContext.Provider value={{
      homeRestaurants: state.homeRestaurants,
      getAllRestaurants,
      showRestaurant,
    }}
    >
      { children }
    </HomeContext.Provider>
  );
};
