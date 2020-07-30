import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import IconExit from '../../../static/svg/close.svg';
import Button from '../../../UI-Kit/Button/Button';
import { createFinance } from '../../../actions/finance';
import { notify } from '../../../actions/notification';
import styles from './Withdraw.scss';

const Withdraw = ({ closePopup, content: { cardNumber, name } }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={closePopup}
      >
        <IconExit />
      </button>
      <h4>Вывод: 1-2 рабочих дней</h4>
      <p className={styles.cardNumber}>{cardNumber}</p>
      <p className={styles.name}>{name}</p>
      <Button
        onClick={() => {
          dispatch(createFinance());
          dispatch(notify(<p className={styles.text}>Готово! Сумма с комиссией -5% будет отправлено в течении 1-2 рабочих дней</p>,
            5000));
          closePopup();
        }}
        viewType="smallGreen"
        classNameWrapper={styles.buttonOutput}
      >
        Вывести
      </Button>
    </div>
  );
};

Withdraw.propTypes = {
  closePopup: PropTypes.func,
  content: PropTypes.shape({
    cardNumber: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default Withdraw;
