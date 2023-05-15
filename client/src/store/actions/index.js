// import { MY_DOG } from 'store/types';

// export const myDog = () => {
//   const dogVars = {
//     barks: 'yes',
//   };

//   return {
//     type: MY_DOG,
//     payload: dogVars,
//   };
// };

import {
  GET_PROD_SOLD,
  GET_PROD_DATE,
  ERROR_GLOBAL,
  SUCCESS_GLOBAL,
  CLEAR_NOTIFICATION,
} from 'store/types';

///// PRODUCTS

export const productsBySold = (data) => ({
  type: GET_PROD_SOLD,
  payload: data,
});

export const productsByDate = (data) => ({
  type: GET_PROD_DATE,
  payload: data,
});

////// NOTIFICATIONS

export const errorGlobal = (msg) => ({
  type: ERROR_GLOBAL,
  payload: msg,
});

export const successGlobal = (msg) => ({
  type: SUCCESS_GLOBAL,
  payload: msg,
});

export const clearNotification = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_NOTIFICATION,
    });
  };
};
