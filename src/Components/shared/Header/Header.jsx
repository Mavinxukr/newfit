import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconLogo from '../../../static/svg/EF.svg';
import IconDumbbell from '../../../static/svg/fdsf.svg';
import IconVideo from '../../../static/svg/film.svg';
import Button from '../../../UI-Kit/Button/Button';
import DatePicker from '../../../UI-Kit/DatePicker/DatePicker';
import styles from './Header.scss';

const Header = () => {
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const isShowedNotification = useSelector((state) => state.notification.isShowed);

  return (
    <div className={styles.wrapper}>
      <header className={cx(styles.header, {
        [styles.headerNoteActive]: isShowedNotification,
      })}
      >
        <div className={styles.leftBlock}>
          <Link to="/">
            <IconLogo />
            <span className={styles.logoText}>Тренер</span>
          </Link>
          <div className={styles.headerBlockInfo}>
            <IconDumbbell className={styles.iconOpacity} />
            <p className={styles.headerText}>У тебя есть 1 бесплатный: Групповой Live</p>
            <a href="/" className={styles.headerBtn}>
              Провести
            </a>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <button type="button" className={cx(styles.btn, styles.btnActive)} disabled>Подписка</button>
          <a href="/" className={styles.btn}>Отправить отзыв</a>
          <p className={styles.horizontalLine} />
          <Button
            viewType="black"
            classNameWrapper={cx(styles.darkBtn, {
              [styles.buttonLiveActive]: isOpenDatePicker,
            })}
            onClick={() => setIsOpenDatePicker(!isOpenDatePicker)}
          >
            <IconVideo className={cx(styles.icon, {
              [styles.iconActive]: isOpenDatePicker,
            })}
            />
            Групповой live
          </Button>
          {isOpenDatePicker && (
          <DatePicker
            classNameWrapper={styles.datePickerWrapper}
            setIsOpenDatePicker={setIsOpenDatePicker}
            isCreateLive
          />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
