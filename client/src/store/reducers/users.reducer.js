// import { MY_DOG } from '../types';

import { AUTH_USER, SIGN_OUT, UPDATE_USER_PROFILE } from '../types';

let DEFAULT_USER_STATE = {
  data: {
    _id: null,
    email: null,
    firstname: null,
    lastname: null,
    history: [],
    verified: null,
  },
  auth: null,
  cart: [],
};

export default function usersReducer(state = DEFAULT_USER_STATE, action) {
  switch (action.type) {
    // case MY_DOG:
    //   return {
    //     ...state,
    //     dog: action.payload,
    //   };

    case AUTH_USER:
      return {
        ...state,
        data: { ...state.data, ...action.payload.data },
        auth: action.payload.auth,
      };

    case SIGN_OUT:
      return {
        ...state,
        data: { ...DEFAULT_USER_STATE.data },
        auth: false,
      };

    case UPDATE_USER_PROFILE:
      return {
        ...state,
        data: { ...action.payload },
        // data: {
        //   firstname: action.payload.data.firstname,
        //   lastname: action.payload.data.lastname,
        // },
      };

    default:
      return state;
  }
}
