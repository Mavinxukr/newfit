import React from 'react';
import cx from 'classnames';
import IconLogo from '../../../static/svg/EF.svg';
import IconDumbbell from '../../../static/svg/fdsf.svg';
import IconVideo from '../../../static/svg/film.svg';
import Button from '../../../UI-Kit/Button/Button';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <a href="/">
          <IconLogo />
          <span className={styles.logoText}>Тренер</span>
        </a>
        <div className={styles.headerBlockInfo}>
          <IconDumbbell className={styles.iconOpacity} />
          <p>У тебя есть 1 бесплатный: Групповой Live</p>
          <Button classNameWrapper={styles.headerBtn} type="button">
            Провести
          </Button>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <Button classNameWrapper={cx(styles.btn, styles.btnActive)} type="button">Подписка</Button>
        <Button classNameWrapper={styles.btn} type="button">Отправить отзыв</Button>
        <p className={styles.horizontalLine} />
        <Button viewType="black" classNameWrapper={styles.darkBtn}>
          <IconVideo className={styles.icon} />
          Групповой live
        </Button>
      </div>
    </header>
  </div>
);

export default Header;
