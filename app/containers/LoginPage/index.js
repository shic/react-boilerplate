// Should be included in every component
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import H2 from 'components/H2';
import Input from 'components/Input';
import Space from 'components/Space';
import Section from 'components/Section';
import Button from 'components/Button';
import CenteredSection from 'components/CenteredSection';
import LoadingIndicator from 'components/LoadingIndicator';
// import ErrorGeneric from 'components/ErrorGeneric';
import ErrorNetwork from 'components/ErrorNetwork';


// Should be included in every component
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

// Optional
import { changeEmail, changePassword, loginEmail } from './actions';
import { makeSelectLoading, makeSelectError, makeSelectEmail, makeSelectPassword } from './selectors';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state email is not null, submit the form to load repos
   */
  componentDidMount() {
    /*
        if (this.props.email && this.props.email.trim().length > 0 && this.props.password) {
          this.props.onLoginEmail();
        }
    */
  }

  onLoginEmailClick = () => {
    this.props.onLoginEmail();
  };

  renderButton() {
    const { onLoginEmail } = this.props;

    return (
      <label htmlFor="LoginButton">
        <Button
          onClick={onLoginEmail}
        >
          Login button
        </Button>
      </label>
    );
  }

  renderLoginStatus() {
    const { loading, error } = this.props;

    if (loading) {
      return <LoadingIndicator />;
    } else if (error) {
      return (
        <div>
          <ErrorNetwork error={error} />
          {this.renderButton()}
        </div>
      );
    }

    return (
      <Section>
        {this.renderButton()}
      </Section>
    );
  }

  render() {
    const { email, password } = this.props;
    return (
      <article>
        <Helmet>
          <title>PageTitle</title>
          <meta name="description" content="MetaDescription" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.header} />
            </H2>
          </CenteredSection>
          <CenteredSection>
            <Section>
              <label htmlFor="email">
                <FormattedMessage {...messages.email} />
                <Space />
                <Input
                  id="email"
                  type="text"
                  placeholder="Your email"
                  value={email}
                  onChange={this.props.onChangeEmail}
                />
              </label>
            </Section>
            <Section>
              <label htmlFor="password">
                <FormattedMessage {...messages.password} />
                <Space />
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={this.props.onChangePassword}
                />
              </label>
            </Section>

            {this.renderLoginStatus()}
          </CenteredSection>
        </div>
      </article>
    );
  }
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  // Individual
  onLoginEmail: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onLoginEmail: () => dispatch(loginEmail()),
  };
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
