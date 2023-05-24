import {
  GET_PROD_SOLD,
  GET_PROD_DATE,
  GET_PROD_PAGINATE,
  PRODUCT_ADD,
  CLEAR_PRODUCT_ADD,
} from 'store/types';

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case GET_PROD_SOLD:
      return { ...state, bySold: action.payload };
    case GET_PROD_DATE:
      return { ...state, byDate: action.payload };
    case GET_PROD_PAGINATE:
      return { ...state, byPaginate: action.payload };
    case PRODUCT_ADD:
      // const a = { ...state, lastAdded: action.payload };
      // console.log('------------', a)
      // return a;
      return { ...state, lastAdded: action.payload };
    case CLEAR_PRODUCT_ADD:
      return { ...state, lastAdded: null };
    default:
      return state;
  }
}
