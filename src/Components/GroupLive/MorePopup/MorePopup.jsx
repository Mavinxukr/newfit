import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../UI-Kit/Button/Button';
import IconExit from '../../../static/svg/close.svg';
import styles from './MorePopup.scss';

const MorePopup = ({ closePopup }) => (
  <div className={styles.wrapper}>
    <button
      type="button"
      className={styles.closeButton}
      onClick={closePopup}
    >
      <IconExit />
    </button>
    <h4 className={styles.title}>
      У вас создано 15 занятий, чтобы создать это удалить самое последнее старое
    </h4>
    <Button
      classNameWrapper={styles.deleteBtn}
      viewType="red"
      type="button"
      onClick={closePopup}
    >
      Удалить старое
    </Button>
  </div>
);

MorePopup.propTypes = {
  closePopup: PropTypes.func,
};

export default MorePopup;
