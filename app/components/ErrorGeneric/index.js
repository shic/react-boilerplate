import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Wrapper from 'components/Wrapper';
import CenteredSection from 'components/CenteredSection';
import messages from './messages';

export default class ErrorGeneric extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    text: PropTypes.string,
  };
  renderView() {
    const { text } = this.props;

    if (text) {
      return (
        <text>
          {text}
        </text>
      );
    }
    return (
      <FormattedMessage {...messages.errorGenericMsg} />
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
