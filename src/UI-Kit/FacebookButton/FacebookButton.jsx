import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import PropTypes from 'prop-types';
import styles from './FacebookButton.scss';

const FacebookButton = ({ responseCallback }) => (
  <FacebookLogin
    socialId="1083453692003561"
    language="en_US"
    scope="public_profile,email"
    responseHandler={responseCallback}
    fields="id,email,name"
    version="v2.5"
    className={styles.facebookButton}
    buttonText="Facebook"
  />
);

FacebookButton.propTypes = {
  responseCallback: PropTypes.func,
};

export default FacebookButton;
