import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import withPopup from '../../../HOC/withPopup';
import OccupationCard from '../OccupationCard/OccupationCard';
import styles from './Layout.scss';
import IconPlus from '../../../static/svg/Group2281.svg';
import { getGroupTraining } from '../../../actions/groupTraning';
import { isAuthSelector, groupTrainingSelector } from '../../../selectors';

const Layout = ({ openPopup, closePopup }) => {
  const [indexForOpenEditForm, setIndexForOpenEditForm] = useState(0);

  const isAuth = useSelector(isAuthSelector);
  const groupTrainings = useSelector(groupTrainingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      closePopup();
      dispatch(getGroupTraining());
    } else {
      openPopup();
    }
  }, [isAuth]);

  return (
    <div className={styles.mainContent}>
      <button type="button" onClick={() => openPopup()}>open</button>
      <h3 className={styles.titlePage}>Созданные</h3>
      <div className={styles.flexGroupLive}>
        <div className={styles.fullWidthBlock}>
          <div className={styles.firstBlock}>
            <span className={styles.textLive}>
              <IconPlus className={styles.iconPlusPlan} />
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
            {!!groupTrainings.length && groupTrainings.map((item) => (
              <OccupationCard
                indexForOpenEditForm={indexForOpenEditForm}
                setIndexForOpenEditForm={setIndexForOpenEditForm}
                item={item}
                openPopup={openPopup}
                key={item.id}
              />
            )) || (
            <p className={cx(styles.notFoundText,
              styles.opacityText)}
            >занятий не найдено
            </p>
            )}
          </div>
        </div>
        <div className={cx(styles.rightBlock, styles.contentInfo)}>
          <h4 className={styles.bottomLine}>Доход</h4>
          <div className={cx(styles.flexGroupLive, styles.contentBetween, styles.alignCenter, styles.totalPriceInfo)}>
            <h1>54 009,24₴</h1>
            <p className={cx(styles.opacityText, styles.totalText)}>
              Общий
            </p>
          </div>
          <div className={cx(styles.flexGroupLive, styles.columnPrice, styles.marginBottom)}>
            <div className={styles.incomeInfo}>
              <p className={styles.amountPrice}>1 512</p>
              <p className={styles.amountText}>Аудитория</p>
            </div>
            <div className={styles.incomeInfo}>
              <p className={cx(styles.colorGreen, styles.amountPrice)}>+12</p>
              <p className={styles.amountText}>Новая с последнего занятия</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  openPopup: PropTypes.func,
  closePopup: PropTypes.func,
};

export default withPopup(Layout);
