import React from 'react';
import styles from './Notification.scss';

const Notification = () => (
  <div className={styles.container}>
    <p className={styles.text}>Мы отправили письмо на вашу почту (kfa@fjiao.co), подтвердите его</p>
    <button className={styles.buttonRepeat} type="button">Отправить повторно</button>
    <button className={styles.buttonMail} type="button">Изменить почту</button>
  </div>
);

export default Notification;
