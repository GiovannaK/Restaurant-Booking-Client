/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { GET_RESTAURANTS, HOME_RESTAURANTS_ERROR, SHOW_RESTAURANT } from './HomeActions';

/* eslint-disable no-empty */
const HomeReducer = (state, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      console.log(action.payload);
      return {
        ...state,
        homeRestaurants: action.payload,
      };
    case SHOW_RESTAURANT:
      /* const value = state.homeRestaurants.filter(
        (rest) => rest._id === action.payload._id,
      ); */
      /* console.log(action.payload); */
      return {
        ...state,
        homeRestaurants: { ...action.payload },
      };
    case HOME_RESTAURANTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
