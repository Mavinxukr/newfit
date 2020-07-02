import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import withPopup from '../../../HOC/withPopup';
import OccupationCard from '../OccupationCard/OccupationCard';
import styles from './Layout.scss';
import { occupations } from '../data';

const Layout = ({ openPopup }) => {
  const [indexForOpenEditForm, setIndexForOpenEditForm] = useState(0);

  // useEffect(() => {
  //   openPopup();
  // }, []);

  return (
    <div className={styles.mainContent}>
      <h3 className={styles.titlePage}>Созданные</h3>
      <div className={styles.flexGroupLive}>
        <div className={styles.fullWidthBlock}>
          <div className={styles.firstBlock}>
            <span className={styles.textLive}>
              <span className={styles.opacityText}>+</span>
              Запланировать: Групповой Live
            </span>
            <span className={cx(styles.opacityText, styles.textLive)}>25 участников в занятии</span>
          </div>
          <div className={styles.contentInfo}>
            <div className={cx(styles.column, {
              [styles.columnOpacity]: indexForOpenEditForm,
            })}
            >
              <div className={cx(styles.flexGroupLive, styles.contentBetween)}>
                <p className={cx(styles.firstTitleContentInfo, styles.opacityText)}>
                  Название
                </p>
                <p className={cx(styles.secondTitleContentInfo, styles.opacityText)}>
                  Участники
                </p>
                <p className={cx(styles.titleContentInfo, styles.opacityText)}>
                  Доход
                </p>
                <p className={cx(styles.lastTitleContentInfo, styles.opacityText)}>
                  Дата
                </p>
              </div>
            </div>
            {occupations.map((item) => (
              <OccupationCard
                indexForOpenEditForm={indexForOpenEditForm}
                setIndexForOpenEditForm={setIndexForOpenEditForm}
                item={item}
                openPopup={openPopup}
              />
            ))}
          </div>
        </div>
        <div className={cx(styles.rightBlock, styles.contentInfo)}>
          <h4 className={styles.bottomLine}>Доход</h4>
          <div className={cx(styles.flexGroupLive, styles.contentBetween, styles.alignCenter)}>
            <h1>54 009,24₴</h1>
            <p className={styles.opacityText}>
              Общий
            </p>
          </div>
          <div className={cx(styles.flexGroupLive, styles.columnPrice, styles.marginBottom)}>
            <div className={styles.incomeInfo}>
              <p className={styles.amountPrice}>1 512</p>
              <p>Аудитория</p>
            </div>
            <div className={styles.incomeInfo}>
              <p className={cx(styles.colorGreen, styles.amountPrice)}>+12</p>
              <p>Новая с последнего занятия</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  openPopup: PropTypes.func,
};

export default withPopup(Layout);
