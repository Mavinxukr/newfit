import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconClose from '../../static/svg/close.svg';
import IconArrow from '../../static/svg/Path121.svg';
import styles from './DatePicker.scss';

const DatePicker = ({ classNameWrapper, setIsOpenDatePicker, isCreateLive }) => (
  <div className={cx(styles.pickerWrapper, classNameWrapper)}>
    <div className={styles.pickerInfo}>
      <p className={styles.pickerText}>Дата: сегодня в 14:30</p>
      <button
        onClick={() => setIsOpenDatePicker(false)}
        aria-label="exit"
        type="button"
        className={styles.buttonClose}
      >
        {isCreateLive && 'Создать' || <IconClose />}
      </button>
    </div>
    <div className={styles.pickerCounter}>
      <p className={styles.pickerCounterDate}>26, сегодня</p>
      <div className={styles.buttons}>
        <button
          aria-label="exit"
          type="button"
          className={styles.pickerCounterButton}
        ><IconArrow className={styles.buttonIcon} />
        </button>
        <button
          aria-label="exit"
          type="button"
          className={styles.pickerCounterButton}
        ><IconArrow className={styles.buttonIcon} />
        </button>
      </div>
    </div>
    <div className={styles.pickerCounter}>
      <p className={styles.pickerCounterDate}>14:30</p>
      <div className={styles.buttons}>
        <button
          aria-label="exit"
          type="button"
          className={styles.pickerCounterButton}
        ><IconArrow className={styles.buttonIcon} />
        </button>
        <button
          aria-label="exit"
          type="button"
          className={styles.pickerCounterButton}
        ><IconArrow className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  </div>
);

DatePicker.propTypes = {
  classNameWrapper: PropTypes.string,
  setIsOpenDatePicker: PropTypes.func,
  isCreateLive: PropTypes.bool,
};

export default DatePicker;
