import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './SocialLinks.scss';
import IconFacebook from '../../../static/svg/facebook1.svg';
import IconTelegram from '../../../static/svg/telegram1.svg';
import IconEmail from '../../../static/svg/Group3192.svg';

const SocialLinks = ({ classNameWrapper }) => (
  <div className={cx(styles.wrapper, classNameWrapper)}>
    <Link to="/" className={styles.socialLink}>
      <IconFacebook />
    </Link>
    <Link to="/" className={styles.socialLink}>
      <IconTelegram />
    </Link>
    <Link to="/" className={styles.socialLink}>
      <IconEmail />
    </Link>
  </div>
);

SocialLinks.propTypes = {
  classNameWrapper: PropTypes.string,
};

export default SocialLinks;
