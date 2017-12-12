import { fromJS } from 'immutable';

import {
  ERROR,
  LOADING,
  STATE_IS_LOADING,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_EMAIL,
  LOGIN_EMAIL_SUCCESS,
  LOGIN_EMAIL_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  email: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {

    case ERROR:
      return state
        .set('error', action.error);
    case LOADING:
      return state
        .set(STATE_IS_LOADING, action.isLoading);
    case CHANGE_EMAIL:
      return state
        .set('email', action.email);
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password);
    case LOGIN_EMAIL:
      return state
        .set('loading', true)
        .set('error', false);
    case LOGIN_EMAIL_SUCCESS:
      return state
        .set('loading', false);
    case LOGIN_EMAIL_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default loginReducer;
