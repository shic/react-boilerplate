/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { genericError, loading } from 'containers/App/actions';

import { loginEmailSuccess, loginEmailError } from './actions';
import { LOGIN_EMAIL, LOGIN_EMAIL_URL } from './constants';
import { makeSelectEmail, makeSelectPassword } from './selectors';

/**
 * Github repos request/response handler
 */
function* loginFromServerSaga() {
  // Select email from store
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());

  try {
    yield put(loading(true));
    const result = yield call(loginFromServer, LOGIN_EMAIL_URL, email, password);
    const auth = Object.assign({}, result);
    yield put(loginEmailSuccess(auth));
    yield put(loading(false));
  } catch (err) {
    yield put(loginEmailError(err));
    yield put(loading(false));
    yield put(genericError(err));
  }
}


function loginFromServer(loginUrl, email, password) {
  const data = {
    auth: {
      email,
      token: password,
      channel: 'web',
      userType: 'USER',
    },
  };

  return axios({
    method: 'post',
    url: loginUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data,
  })
    .then((response) => {
      const responseData = response.data;
      console.log(`Login Response: ${responseData.json()}`);
      return responseData;
    })
    .catch((error) => {
      console.log(`Login error: ${error}`);
      throw error;
    });
}
  /**
 * Root saga manages watcher lifecycle
 */
export default function* loginSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN_EMAIL, loginFromServerSaga);
}
