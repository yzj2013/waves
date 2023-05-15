import * as actions from './index';
import axios from 'axios';

export const productsBySort = ({ limit, sortBy, order, where }) => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`/api/products/all`, {
        params: {
          limit,
          sortBy,
          order,
        },
      });
      // dispatch(actions.productsBySold(products.data));
      // dispatch(actions.productsByDate(products.data));

      switch (where) {
        case 'bySold':
          dispatch(actions.productsBySold(products.data));
          break;
        case 'byDate':
          dispatch(actions.productsByDate(products.data));
          break;
        default:
          return false;
      }

      // console.log(products);
    } catch (error) {
      console.log(error);
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
