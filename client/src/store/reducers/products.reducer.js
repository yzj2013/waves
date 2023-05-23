import { GET_PROD_SOLD, GET_PROD_DATE, GET_PROD_PAGINATE } from 'store/types';

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case GET_PROD_SOLD:
      return { ...state, bySold: action.payload };
    case GET_PROD_DATE:
      return { ...state, byDate: action.payload };
    case GET_PROD_PAGINATE:
      return { ...state, byPaginate: action.payload };

    default:
      return state;
  }
}
