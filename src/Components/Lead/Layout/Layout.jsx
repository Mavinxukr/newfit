import React from 'react';
import cx from 'classnames';
import Button from '../../UI-Kit/Button/Button';
import IconFeedBack from '../../static/svg/feedback.svg';
import IconDelete from '../../static/svg/delete.svg';
import styles from './Layout.scss';

const Layout = () => (
  <div className={styles.mainContent}>
    <h3 className={styles.titlePage}>Созданные</h3>
    <div className={styles.flex}>
      <div className={styles.fullWidth}>
        <div className={styles.firstBlock}>
          <span className={styles.greenText}>
            + Запланировать: Бесплатное Групповой Live
          </span>
          <span className={cx(styles.greenText, styles.opacityText)}>1,5 часа, 25 участников</span>
        </div>
        <div className={styles.contentInfo}>
          <div className={cx(styles.flex, styles.contentBetween)}>
            <div className={styles.fullWidth}>
              <p className={cx(styles.opacityText, styles.titleInfo)}>Название</p>
              <p>Демо-занятие: Relaxing</p>
            </div>
            <div className={styles.fullWidth}>
              <p className={cx(styles.opacityText, styles.titleInfo)}>Участники</p>
              <p>25</p>
            </div>
            <div className={styles.fullWidth}>
              <p className={cx(styles.opacityText, styles.titleInfo)}>Доход</p>
              <p className={styles.price}>0 грн.</p>
            </div>
            <div className={cx(styles.fullWidth, styles.textRight)}>
              <p className={cx(styles.opacityText, styles.titleInfo, styles.contentAfter)}>
                Дата
              </p>
              <div className={styles.posR}>
                <p className={cx(styles.greenText, styles.contentAfter)}>
                  Можно начать
                </p>
                <Button type="button" viewType="green" classNameWrapper={styles.demoBtn}>
                  <IconFeedBack className={styles.icon} />
                  Начать демо-занятие
                </Button>
                <Button type="button" classNameWrapper={styles.deleteBtn}>
                  <IconDelete />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(styles.rightBlock, styles.contentInfo)}>
        <h4 className={styles.bottomLine}>Доход</h4>
        <div className={cx(styles.flex, styles.contentBetween, styles.alignCenter)}>
          <h1>0₴</h1>
          <p className={styles.opacityText}>
            Общий, грн.
          </p>
        </div>
        <div className={cx(styles.flex, styles.contentBetween, styles.marginBottom)}>
          <p className={styles.price}>0</p>
          <p>Аудитория</p>
        </div>
        <div className={cx(styles.flex, styles.contentBetween)}>
          <p className={styles.price}>+0</p>
          <p>Новая с последнего занятия</p>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
