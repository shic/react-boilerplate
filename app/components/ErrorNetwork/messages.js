import { defineMessages } from 'react-intl';

export default defineMessages({
  err_network_request: {
    id: 'boilerplate.components.ErrorNetwork.error_network_request',
    defaultMessage: 'Network Request error, please try again!',
  },
  err_wrong_username_or_password: {
    id: 'boilerplate.components.ErrorNetwork.err_wrong_username_or_password',
    defaultMessage: 'Wrong user name or password.',
  },
  err_no_internet_connection: {
    id: 'boilerplate.components.ErrorNetwork.err_no_internet_connection',
    defaultMessage: 'No Internet connection. Please check your Internet connection.',
  },

  err_server_unreachable: {
    id: 'boilerplate.components.ErrorNetwork.err_server_unreachable',
    defaultMessage: 'Server could not be reached. Please try again later!',
  },

});
