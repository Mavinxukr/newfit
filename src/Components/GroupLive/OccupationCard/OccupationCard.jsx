import React, { useState } from 'react';
import cx from 'classnames';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OccupationCard.scss';
import Button from '../../../UI-Kit/Button/Button';
import MorePopup from '../MorePopup/MorePopup';
// import IconGreenPlus from '../../../static/svg/greenPlus.svg';
import IconCalendar from '../../../static/svg/calendar-2.svg';
// import IconEdit from '../../../static/svg/edit.svg';
import Participants from '../Participants/Participants';
import ResponsiveTextarea from '../../../UI-Kit/ResponsiveTextarea/ResponsiveTextarea';
import FormLive from '../FormLive/FormLive';
import IconCopy from '../../../static/svg/copy1.svg';
import { copyText } from '../../../utils';

const OccupationCard = ({
  item: {
    cost,
    id,
    is_missed_training: isMissedTraining,
    name,
    participants,
    participants_count: participantsCount,
    total_sum: totalSum,
    start_at: startAt,
    user_url: userUrl,
  }, openPopup, indexForOpenEditForm, setIndexForOpenEditForm,
}) => {
  const [isOpenButtonsControl, setIsOpenButtonsControl] = useState(false);
  const [valueTitle, setValueTitle] = useState(name || '');

  return (
    <div className={cx(styles.card, {
      [styles.cardWithoutBorder]: id === indexForOpenEditForm,
    })}
    >
      {id === indexForOpenEditForm && <FormLive setIndexForOpenEditForm={setIndexForOpenEditForm} />}
      <div className={cx(styles.cardWrapper, {
        [styles.firstTitleContentInfoOpacity]: indexForOpenEditForm,
      })}
      >
        <div className={cx(styles.firstTitleContentInfo, styles.flexGroupLive, styles.column)}>
          <div className={styles.mainInfo}>
            <ResponsiveTextarea text={valueTitle} setText={setValueTitle} />
            <button
              className={cx(styles.buttonPrice, {
                [styles.buttonPriceNull]: !cost,
              })}
              type="button"
              aria-label="edit"
              onClick={() => setIndexForOpenEditForm(id)}
            >
              {cost} грн
            </button>
          </div>
          <Button
            classNameWrapper={styles.greyBtn}
            type="button"
            onClick={() => {
              openPopup({
                PopupContentComponent: MorePopup,
              });
            }}
          >
            {/* {item.isEditPromoSite && ( */}
            {/*  <IconGreenPlus className={styles.icon} /> */}
            {/* ) || ( */}
            {/*  <IconEdit className={styles.icon} /> */}
            {/* )} */}
            {/* {item.isEditPromoSite && 'Создать' || 'Редактировать'} промо-сайт */}
            Редактировать
          </Button>
        </div>
        <div className={cx(styles.secondTitleContentInfo, styles.flexGroupLive)}>
          <p className={cx(styles.count, {
            [styles.countNull]: participantsCount,
          })}
          >{participantsCount}
          </p>
          {participantsCount > 0 && (
            <a
              className={styles.showMore}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                openPopup({
                  PopupContentComponent: Participants,
                  content: participants,
                });
              }}
            >
              Показать
            </a>
          )}
        </div>
        <div className={styles.titleContentInfo}>
          <p className={cx(styles.count, styles.countTotal, {
            [styles.countNull]: totalSum,
          })}
          >{totalSum} грн
          </p>
        </div>
        <div className={cx(styles.lastTitleContentInfo, styles.column)}>
          <p className={cx(styles.date, {
            [styles.dateGreen]: isMissedTraining,
          })}
          >{startAt}
          </p>
          {!isMissedTraining && (
            <div>
              <input type="text" value={userUrl} className={styles.copyInput} />
              <Button
                type="button"
                viewType="white"
                classNameWrapper={cx(styles.sizeBtn, styles.sizeBtnMargin, styles.buttonCopy)}
                onClick={() => copyText(`.${styles.copyInput}`)}
              >
                <IconCopy className={styles.icon} />
                Ссылка
              </Button>
              {/* <Link to="/group-live-waiting"> */}
              {/*  <Button */}
              {/*    href */}
              {/*    viewType="green" */}
              {/*    classNameWrapper={styles.sizeBtn} */}
              {/*  > */}
              {/*    <IconVideo className={styles.icon} /> */}
              {/*    Начать */}
              {/*  </Button> */}
              {/* </Link> */}
            </div>
          ) || (
            <Button
              type="button"
              viewType={!isMissedTraining ? 'green' : 'grey'}
              classNameWrapper={isMissedTraining ? styles.sizeBtn : styles.greyBtn}
            >
              <IconCalendar className={cx(styles.icon, {
                [styles.iconGreen]: isMissedTraining,
              })}
              />
              Запланировать
            </Button>
          )}
          <button
            type="button"
            className={styles.dotsItems}
            onClick={() => setIsOpenButtonsControl(!isOpenButtonsControl)}
          >
            <span className={styles.dotItem} />
            <span className={styles.dotItem} />
            <span className={styles.dotItem} />
          </button>
          {isOpenButtonsControl && (
            <div className={styles.buttonsBlock}>
              <button
                type="button"
                className={styles.buttonEdit}
                onClick={() => {
                  setIndexForOpenEditForm(id);
                  setIsOpenButtonsControl(false);
                }}
              >Редактировать
              </button>
              <button
                type="button"
                className={styles.buttonDelete}
                onClick={() => setIsOpenButtonsControl(false)}
              >
                Удалить
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

OccupationCard.propTypes = {
  item: PropTypes.shape({
    cost: PropTypes.number,
    id: PropTypes.number,
    is_missed_training: PropTypes.bool,
    name: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.object),
    participants_count: PropTypes.number,
    total_sum: PropTypes.number,
    start_at: PropTypes.string,
    user_url: PropTypes.string,
  }),
  openPopup: PropTypes.func,
  setIndexForOpenEditForm: PropTypes.func,
  indexForOpenEditForm: PropTypes.number,
};

export default OccupationCard;
