import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconFullStar from '../../static/svg/star.svg';
import IconEmptyStar from '../../static/svg/star-empty.svg';
import styles from './Stars.scss';

const Stars = ({ classNameWrapper }) => (
  <div className={cx(styles.wrapper, classNameWrapper)}>
    <p className={styles.iconWrapper}>
      <IconFullStar className={styles.iconFull} />
    </p>
    <p className={styles.iconWrapper}>
      <IconFullStar className={styles.iconFull} />
    </p>
    <p className={styles.iconWrapper}>
      <IconFullStar className={styles.iconFull} />
    </p>
    <p className={styles.iconWrapper}>
      <IconFullStar className={styles.iconFull} />
    </p>
    <p className={styles.iconWrapper}>
      <IconEmptyStar />
    </p>
  </div>
);

Stars.propTypes = {
  classNameWrapper: PropTypes.string,
};

export default Stars;
