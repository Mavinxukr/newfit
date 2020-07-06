import React from 'react';
import cx from 'classnames';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';
import styles from './GoogleButton.scss';

const GoogleButton = ({ onSuccess, onFailure, classNameWrapper }) => (
  <GoogleLogin
    clientId="892807808817-0v44irg3g2b16vdbt4m7usn5g3uprhmj.apps.googleusercontent.com"
    render={(renderProps) => (
      <button
        className={cx(styles.googleButton, classNameWrapper)}
        type="button"
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}
      >
        Google
      </button>
    )}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy="single_host_origin"
  />
);

GoogleButton.propTypes = {
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  classNameWrapper: PropTypes.string,
};

export default GoogleButton;
