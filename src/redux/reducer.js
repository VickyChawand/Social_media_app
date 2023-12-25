import {SET_CURRENT_PAGE} from './action-types';


const initialState = {
    currentPage: '/signup', // Set the initial page
  };


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        };
      default:
        return state;
    }
  };