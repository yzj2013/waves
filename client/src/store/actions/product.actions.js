import * as actions from './index';
import axios from 'axios';

import {
  getAuthHeader,
  removeTokenCookie,
  getTokenCookie,
} from '../../utils/tool';

axios.defaults.headers.post['Content-Type'] = 'application/json';

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
      // console.log(error);
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const productsByPaginate = (args) => {
  return async (dispatch) => {
    try {
      const products = await axios.post(`/api/products/paginate/all`, args);

      dispatch(actions.productsByPaginate(products.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const productRemove = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/products/product/${id}`, getAuthHeader());

      dispatch(actions.productRemove());
      dispatch(actions.successGlobal());
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
