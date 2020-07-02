import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconExit from '../../../static/svg/close.svg';
import Button from '../../../UI-Kit/Button/Button';
import styles from './FinishPopup.scss';

const FinishPopup = ({ closePopup }) => (
  <div className={styles.wrapper}>
    <button
      type="button"
      className={styles.closeButton}
      onClick={(closePopup)}
    >
      <IconExit className={styles.colorPath} />
    </button>
    <h4 className={styles.title}>Завершить Live?</h4>
    <Link to="/group-live-finish">
      <Button
        href
        onClick={closePopup}
        classNameWrapper={styles.finishButton}
        viewType="red"
      >
        Завершить
      </Button>
    </Link>
  </div>
);

FinishPopup.propTypes = {
  closePopup: PropTypes.func,
};

export default FinishPopup;
