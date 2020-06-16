import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Popup.module.scss';

const Popup = ({ children, classNameWrapper }) => (
  <>
    <div className={styles.backgroundPopup} />
    <div className={cx(styles.popup, classNameWrapper)}>
      {children}
    </div>
  </>
);

Popup.propTypes = {
  children: PropTypes.node,
  classNameWrapper: PropTypes.string,
};

export default Popup;
