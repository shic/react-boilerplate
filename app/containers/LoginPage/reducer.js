import { fromJS } from 'immutable';

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_EMAIL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state
        .set('username', action.username);
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password);
    case LOGIN_EMAIL:
      return state
        .set('loading', true)
        .set('error', false);
    default:
      return state;
  }
}

export default loginReducer;
