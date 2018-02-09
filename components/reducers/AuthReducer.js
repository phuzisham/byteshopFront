import { SIGN_IN_USER, SIGN_IN_USER_FAILURE, SIGN_IN_USER_SUCCESS, EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGN_IN_USER:
      return { ...state };
    case SIGN_IN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case SIGN_IN_USER_FAILURE:
      return { ...state, password: '' }
    default:
      return state;
  }
}
