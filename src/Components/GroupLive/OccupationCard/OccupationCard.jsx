import React, { useState } from 'react';
import cx from 'classnames';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OccupationCard.scss';
import Button from '../../../UI-Kit/Button/Button';
import MorePopup from '../MorePopup/MorePopup';
import IconGreenPlus from '../../../static/svg/greenPlus.svg';
import IconCalendar from '../../../static/svg/calendar-2.svg';
import IconEdit from '../../../static/svg/edit.svg';
// import IconVideo from '../../../static/svg/Polygon1.svg';
import Participants from '../Participants/Participants';
import ResponsiveTextarea from '../../../UI-Kit/ResponsiveTextarea/ResponsiveTextarea';
import FormLive from '../FormLive/FormLive';
import { participants } from '../data';
import IconCopy from '../../../static/svg/copy1.svg';

const OccupationCard = ({
  item, openPopup, indexForOpenEditForm, setIndexForOpenEditForm,
}) => {
  const [isOpenButtonsControl, setIsOpenButtonsControl] = useState(false);
  const [valueTitle, setValueTitle] = useState(item.title || '');

  return (
    <div className={cx(styles.card, {
      [styles.cardWithoutBorder]: item.id === indexForOpenEditForm,
    })}
    >
      {item.id === indexForOpenEditForm && <FormLive setIndexForOpenEditForm={setIndexForOpenEditForm} />}
      <div className={cx(styles.cardWrapper, {
        [styles.firstTitleContentInfoOpacity]: indexForOpenEditForm,
      })}
      >
        <div className={cx(styles.firstTitleContentInfo, styles.flexGroupLive, styles.column)}>
          <div className={styles.mainInfo}>
            <ResponsiveTextarea text={valueTitle} setText={setValueTitle} />
            <button
              className={cx(styles.buttonPrice, {
                [styles.buttonPriceNull]: !item.price,
              })}
              type="button"
              aria-label="edit"
              onClick={() => setIndexForOpenEditForm(item.id)}
            >
              {item.price} грн
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
            {item.isEditPromoSite && (
              <IconGreenPlus className={styles.icon} />
            ) || (
              <IconEdit className={styles.icon} />
            )}
            {item.isEditPromoSite && 'Создать' || 'Редактировать'} промо-сайт
          </Button>
        </div>
        <div className={cx(styles.secondTitleContentInfo, styles.flexGroupLive)}>
          <p className={cx(styles.count, {
            [styles.countNull]: !item.countParticipant,
          })}
          >{item.countParticipant}
          </p>
          {item.countParticipant > 0 && (
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
            [styles.countNull]: !item.totalSum,
          })}
          >{item.totalSum} грн
          </p>
        </div>
        <div className={cx(styles.lastTitleContentInfo, styles.column)}>
          <p className={cx(styles.date, {
            [styles.dateGreen]: item.statusDate === 'planned',
          })}
          >{item.date}
          </p>
          {item.statusDate === 'planned' && (
            <div>
              <Button
                type="button"
                viewType="white"
                classNameWrapper={cx(styles.sizeBtn, styles.sizeBtnMargin, styles.buttonCopy)}
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
              viewType={item.statusDate === 'missed' ? 'green' : 'grey'}
              classNameWrapper={item.statusDate === 'missed' ? styles.sizeBtn : styles.greyBtn}
            >
              <IconCalendar className={cx(styles.icon, {
                [styles.iconGreen]: item.statusDate === 'missed',
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
                  setIndexForOpenEditForm(item.id);
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
  item: PropTypes.object,
  openPopup: PropTypes.func,
  setIndexForOpenEditForm: PropTypes.func,
  indexForOpenEditForm: PropTypes.number,
};

export default OccupationCard;
