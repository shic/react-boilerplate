import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Wrapper from 'components/Wrapper';
import CenteredSection from 'components/CenteredSection';
import messages from './messages';

export default class ErrorNetwork extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    error: PropTypes.object,
  };


  renderError500(error) {
    const errorCode = error.data.code;
    const content = (
      <Wrapper>
        <text>Error Code:</text>
        <text>{errorCode}</text>
      </Wrapper>
    );


    switch (errorCode) {
      case 10302:
        return (
          <CenteredSection>
            <FormattedMessage {...messages.err_wrong_username_or_password} />
            {content}
          </CenteredSection>
        );

      default:
        return (
          <FormattedMessage {...messages.err_network_request} />
        );
    }
  }

  renderView() {
    const { error } = this.props;
    let status = 0;

    if (error) {
      status = error.status;
      switch (status) {
        case 500:
          return this.renderError500(error);

        case 404:
          return (
            <FormattedMessage {...messages.err_no_internet_connection} />
          );

        default:
          // 500+ 402, 403, 405+
          return (
            <FormattedMessage {...messages.err_network_request} />
          );
      }
    }

    return (
      <FormattedMessage {...messages.err_network_request} />
    );
  }

  render() {
    return (
      <Wrapper>
        <CenteredSection>
          {this.renderView()}
        </CenteredSection>
      </Wrapper>
    );
  }
}
