/*
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

import { BASE_URL } from 'containers/App/constants';

export const LOGIN_EMAIL = 'boilerplate/LoginPage/LOGIN_EMAIL';
export const CHANGE_EMAIL = 'boilerplate/LoginPage/CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'boilerplate/LoginPage/CHANGE_PASSWORD';
export const LOGIN_EMAIL_SUCCESS = 'boilerplate/LoginPage/LOGIN_EMAIL_SUCCESS';
export const LOGIN_EMAIL_ERROR = 'boilerplate/LoginPage/LOGIN_EMAIL_ERROR';

export const LOGIN_EMAIL_URL = `${BASE_URL}/auths/get `;
