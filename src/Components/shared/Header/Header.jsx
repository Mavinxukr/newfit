import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import IconLogo from '../../../static/svg/EF.svg';
import IconDumbbell from '../../../static/svg/fdsf.svg';
import IconVideo from '../../../static/svg/film.svg';
import Button from '../../../UI-Kit/Button/Button';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <div className={styles.leftBlock}>
        <Link to="/">
          <IconLogo />
          <span className={styles.logoText}>Тренер</span>
        </Link>
        <div className={styles.headerBlockInfo}>
          <IconDumbbell className={styles.iconOpacity} />
          <p>У тебя есть 1 бесплатный: Групповой Live</p>
          <a href="/" className={styles.headerBtn}>
            Провести
          </a>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <a href="/" className={cx(styles.btn, styles.btnActive)}>Подписка</a>
        <a href="/" className={styles.btn}>Отправить отзыв</a>
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
