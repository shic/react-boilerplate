import { createSelector } from 'reselect';
import { STATE_IS_LOADING } from '../App/constants';

const selectLogin = (state) => state.get('login');

// General
const makeSelectLoading = () => createSelector(
  selectLogin,
  (loginState) => loginState.get(STATE_IS_LOADING)
);

const makeSelectError = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('error')
);

const makeSelectEmail = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('email')
);

const makeSelectPassword = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('password')
);

export {
  makeSelectLoading,
  makeSelectError,
  selectLogin,
  makeSelectEmail,
  makeSelectPassword,
};
