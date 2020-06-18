import React from 'react';
import PropTypes from 'prop-types';
import IconExit from '../../../static/svg/Group150.svg';
import Button from '../../../UI-Kit/Button/Button';
import styles from './Withdraw.scss';

const Withdraw = ({ closePopup }) => (
  <div className={styles.wrapper}>
    <button
      type="button"
      className={styles.closeButton}
      onClick={closePopup}
    >
      <IconExit />
    </button>
    <h4>Вывод: 1-2 рабочих дней</h4>
    <p className={styles.cardNumber}>8419 9401 3189 0410</p>
    <p className={styles.name}>Ethan Pierce</p>
    <Button
      onClick={closePopup}
      viewType="smallGreen"
      classNameWrapper={styles.buttonOutput}
    >
      Вывести
    </Button>
  </div>
);

Withdraw.propTypes = {
  closePopup: PropTypes.func,
};

export default Withdraw;
