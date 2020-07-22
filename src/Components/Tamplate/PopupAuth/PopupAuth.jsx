import React from 'react';
import FacebookButton from '../../../UI-Kit/FacebookButton/FacebookButton';
import GoogleButton from '../../../UI-Kit/GoogleButton/GoogleButton';
import styles from './PopupAuth.scss';

const PopupAuth = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>Вход/Создание</h2>
    <p className={styles.text}>Чтобы не потерять данные о покупки</p>
    <hr className={styles.line} />
    <div className={styles.buttons}>
      <FacebookButton />
      <GoogleButton />
    </div>
  </div>
);

export default PopupAuth;
