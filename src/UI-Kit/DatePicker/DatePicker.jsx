import React, { useState } from 'react';
import IconClose from '../../static/svg/close.svg';
import IconArrow from '../../static/svg/Path121.svg';
import styles from './DatePicker.scss';

const DatePicker = () => {
  const [isOpenPicker, setIsOpenPicker] = useState(false);

  return (
    <>
      {!isOpenPicker && (
        <button
          type="button"
          className={styles.button}
          onClick={() => setIsOpenPicker(true)}
        >
          Дата: сегодня в 14:30
        </button>
      ) || (
        <div className={styles.pickerWrapper}>
          <div className={styles.pickerInfo}>
            <p className={styles.pickerText}>Дата: сегодня в 14:30</p>
            <button
              onClick={() => setIsOpenPicker(false)}
              aria-label="exit"
              type="button"
            ><IconClose />
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
      )}
    </>
  );
};

export default DatePicker;
