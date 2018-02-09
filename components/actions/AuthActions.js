import { SIGN_IN_USER, SIGN_IN_USER_SUCCESS, SIGN_IN_USER_FAILURE } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const signInUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGN_IN_USER });

    fetch('http://192.168.1.104:3000/api/auth/sign_in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((response) => {
      console.log('response.status =>', response.status);
      console.log('response.headers.map =>', response.headers.map);
    });
  };
};
