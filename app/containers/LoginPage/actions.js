
import {
  ERROR,
  LOADING,
  LOGIN_EMAIL,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_EMAIL_SUCCESS,
  LOGIN_EMAIL_ERROR,
} from './constants';

export function genericError(error) {
  return {
    type: ERROR,
    error,
  };
}

export function loading(isLoading) {
  return {
    type: LOADING,
    isLoading,
  };
}


export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}


export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}


export function loginEmail() {
  return {
    type: LOGIN_EMAIL,
  };
}

export function loginEmailSuccess(auth) {
  return {
    type: LOGIN_EMAIL_SUCCESS,
    auth,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function loginEmailError(error) {
  return {
    type: LOGIN_EMAIL_ERROR,
    error,
  };
}
