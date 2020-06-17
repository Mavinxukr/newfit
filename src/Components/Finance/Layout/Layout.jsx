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
          <p className={styles.balance}>18 990,89₴</p>
          <span className={styles.opacityText}>На вашем аккаунте</span>
        </div>
        <Button classNameWrapper={styles.buttonWithdraw} type="button" viewType="green">
          Вывести
        </Button>
      </div>
      <div className={styles.flex}>
        <div className={styles.contentMoreInfo}>
          <h5>Выводы</h5>
          {/* <p className={styles.contentCenter}>Пока не было</p> */}
          <div className={styles.findings}>
            <p>11 Апр, 2020</p>
            <p>Ethan Pierce … 9301</p>
            <p className={styles.opacityTextFindings}>Ждет подтверждения</p>
            <p>6 314,00₴</p>
          </div>
          <div className={styles.findings}>
            <p>2 Апр, 20201</p>
            <p>Ethan Pierce … 9301</p>
            <p className={styles.opacityTextFindings} />
            <p>2 522,10₴</p>
          </div>
        </div>
        <div className={styles.contentMoreInfo}>
          <h5 className={styles.title}>Доходы</h5>
          <div className={styles.finance}>
            <p>Вывод</p>
            <p>Hardcore Crossfit</p>
            <p>+ 54 009,24₴</p>
          </div>
          {/* <p className={styles.contentCenter}>Пока не было</p> */}
        </div>
      </div>
    </div>
    <div className={cx(styles.flex, styles.contentFlexStart)}>
      <div className={cx(styles.contentInfo, styles.fullWidth)}>
        <div className={cx(styles.flex, styles.contentBetween)}>
          <div className={styles.column}>
            <h4>Мои подписки</h4>
            <span className={styles.opacityText}>Подключённые</span>
          </div>
          <Button classNameWrapper={styles.buttonWithdraw} type="button" viewType="white">
            Продлить по Июнь 8,24$ (-2%)
          </Button>
        </div>
        <div className={cx(styles.flex, styles.contentBottom, styles.contentFlexStart)}>
          <div className={styles.column}>
            <p className={styles.titleLive}>Групповой Live</p>
            <p className={styles.subTitleLive}>До 10 июля</p>
          </div>
          <div>
            <div className={cx(styles.flex, styles.blockLive)}>
              <p className={styles.subTitleLive}>25 клиентов</p>
              <Button type="button" viewType="grey" classNameWrapper={styles.btnEdit}>
                Изменить
              </Button>
            </div>
            <div className={cx(styles.flex, styles.blockLive)}>
              <p className={styles.subTitleLive}>2ч 30м занятие</p>
              <Button type="button" viewType="grey" classNameWrapper={styles.btnEdit}>
                Изменить
              </Button>
            </div>
            <div className={styles.infoPrice}>
              <p className={cx(styles.activePrice, styles.firstPrice)}>1 месяц</p>
              <p className={styles.firstPrice}>8,40$</p>
            </div>
            <div className={styles.infoPrice}>
              <p className={styles.secondPrice}>2 месяца</p>
              <p className={styles.secondPrice}>16,30$ (8,15$/м сохраните 3%)</p>
            </div>
            <div className={styles.infoPrice}>
              <p className={styles.thirdPrice}>3 месяца</p>
              <p className={styles.thirdPrice}>23,94$ (7,98$/м сохраните 5%)</p>
            </div>
          </div>
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
          <p className={styles.text}>Ethan Pierce ... 9301</p>
          <Button classNameWrapper={styles.btn} type="button">Редактировать</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
