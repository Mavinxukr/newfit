import React from 'react';
import cx from 'classnames';
import TemplateWrapper from '../../shared/TemplateWrapper/TemplateWrapper';
import Button from '../../../UI-Kit/Button/Button';
import styles from './Layout.scss';

const Layout = ({ discount }) => (
  <TemplateWrapper>
    <div className={styles.content}>
      <div className={styles.infoWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>CrossFit тренировка для расслабления</h1>
        </div>
        <div className={styles.info}>
          <div className={styles.infoParticipant}>
            <p className={styles.infoParticipantCount}>3</p>
            <p className={styles.infoParticipantText}>Участников</p>
          </div>
          <div className={styles.infoDate}>
            <p className={styles.infoDateCount}>Сегодня, 14:30</p>
            <p className={styles.infoDateText}>Дата</p>
          </div>
        </div>
      </div>
      <div className={styles.priceWrapper}>
        <p className={cx(styles.priceCount, {
          [styles.priceCountDiscount]: discount,
        })}
        >
          ₽ 1 700
          <span className={cx(styles.priceCurrency, {
            [styles.priceCurrencyDiscount]: discount,
          })}
          >
            {discount || ''} руб.
          </span>
        </p>
        <Button
          type="button"
          viewType="green"
          classNameWrapper={styles.priceParticipant}
        >
          Оплатить участие
        </Button>
      </div>
    </div>
  </TemplateWrapper>
);

export default Layout;
