import React, { useReducer } from 'react';
import { GET_RESTAURANTS, HOME_RESTAURANTS_ERROR } from './HomeActions';
import HomeReducer from './HomeReducer';
import HomeContext from './index';
import { api } from '../../services/api';

export const HomeState = ({ children }) => {
  const initialState = {
    homeRestaurants: [],
  };
  const [state, dispatch] = useReducer(HomeReducer, initialState);

  // get all restaurants

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

  return (
    <HomeContext.Provider value={{
      homeRestaurants: state.homeRestaurants,
      getAllRestaurants,
    }}
    >
      { children }
    </HomeContext.Provider>
  );
};
