import React from 'react';
import cx from 'classnames';
import Button from '../../../UI-Kit/Button/Button';
import styles from './Layout.scss';

const Layout = () => (
  <div className={styles.mainContent}>
    <h3>Финансы</h3>
    <div className={styles.contentInfo}>
      <div className={cx(styles.flex, styles.contentBetween)}>
        <div className={styles.column}>
          <p className={styles.balance}>0,00$</p>
          <span className={styles.opacityText}>На вашем аккаунте</span>
        </div>
        <Button classNameWrapper={styles.buttonWithdraw} type="button" viewType="green">
          Вывести
        </Button>s
      </div>
      <div className={styles.flex}>
        <div className={styles.contentMoreInfo}>
          <h5>Выводы</h5>
          <p className={styles.contentCenter}>Пока не было</p>
        </div>
        <div className={styles.contentMoreInfo}>
          <h5 className={styles.title}>Приходы</h5>
          <p className={styles.contentCenter}>Пока не было</p>
        </div>
      </div>
    </div>
    <div className={styles.flex}>
      <div className={cx(styles.contentInfo, styles.fullWidth)}>
        <div className={cx(styles.flex, styles.contentBetween)}>
          <div className={styles.column}>
            <h4>Мои подписки</h4>
            <span className={styles.opacityText}>Подключённые</span>
          </div>
          <Button classNameWrapper={styles.buttonWithdraw} type="button" viewType="green">
            Выбрать подписку
          </Button>
        </div>
        <div className={cx(styles.flex, styles.contentBottom)}>
          <h5>Выводы</h5>
          <p className={styles.text}>Бесплатно: 1,5 часа, 25 участников</p>
          <p />
        </div>
      </div>
      <div className={cx(styles.contentInfo, styles.fullWidth)}>
        <div className={cx(styles.flex, styles.contentBetween)}>
          <div className={styles.column}>
            <h4>Методы оплаты</h4>
            <span className={styles.opacityText}>Вывод и оплата</span>
          </div>
        </div>
        <div className={cx(styles.flex, styles.contentBottom)}>
          <h5>Выводы</h5>
          <p className={styles.text}>MasterCard ... 9301</p>
          <Button classNameWrapper={styles.btn} type="button">Редактировать</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
