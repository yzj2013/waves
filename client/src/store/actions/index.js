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

import { GET_PROD_SOLD, GET_PROD_DATE } from 'store/types';

export const productsBySold = (data) => ({
  type: GET_PROD_SOLD,
  payload: data,
});

export const productsByDate = (data) => ({
  type: GET_PROD_DATE,
  payload: data,
});
