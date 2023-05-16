import * as actions from './index';
import axios from 'axios';

export const usersRegister = (values) => {
  return async (dispatch) => {
    try {
      const user = await axios.post(`/api/auth/register`, {
        email: values.email,
        password: values.password,
      });

      dispatch(
        actions.userAuthenticate({
          data: user.data.user,
          auth: true,
        })
      );

      dispatch(
        actions.successGlobal('Welcome !! Check your email to verify account')
      );
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
