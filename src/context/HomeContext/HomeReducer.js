import { GET_RESTAURANTS, HOME_RESTAURANTS_ERROR, SHOW_RESTAURANT } from './HomeActions';

/* eslint-disable no-empty */
const HomeReducer = (state, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        homeRestaurants: action.payload,
      };
    case SHOW_RESTAURANT:
      return {};
    case HOME_RESTAURANTS_ERROR:
      return {};
    default:
      return state;
  }
};

export default HomeReducer;
