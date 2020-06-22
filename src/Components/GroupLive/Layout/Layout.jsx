import React from 'react';
import cx from 'classnames';
import Button from '../../../UI-Kit/Button/Button';
import IconCopy from '../../../static/svg/copy.svg';
import IconEdit from '../../../static/svg/edit.svg';
import IconCalendar from '../../../static/svg/calendar-2.svg';
import styles from './Layout.scss';

const Layout = () => (
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
          <div className={styles.column}>
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
            <div className={cx(styles.flexGroupLive, styles.contentBetween, styles.marginRight)}>
              <div className={cx(styles.firstTitleContentInfo, styles.flexGroupLive, styles.column)}>
                <div className={styles.flexGroupLive}>
                  <h4 className={styles.mainTitle}>Утренняя медитация</h4>
                  <p className={cx(styles.medium, styles.colorGreen)}>290₴</p>
                </div>
                <div>
                  <Button
                    classNameWrapper={styles.greyBtn}
                    type="button"
                  >
                    Создать промо-сайт
                  </Button>
                </div>
              </div>
              <div className={cx(styles.secondTitleContentInfo, styles.flexGroupLive)}>
                <p className={styles.medium}>34</p>
                <a className={styles.showMore} href="/">Показать</a>
              </div>
              <div className={styles.titleContentInfo}>
                <p className={styles.medium}>9 860₴</p>
              </div>
              <div className={cx(styles.lastTitleContentInfo, styles.column)}>
                <h4 className={styles.colorGreen}>Сегодня, 14:00</h4>
                <div>
                  <Button
                    type="button"
                    viewType="white"
                    classNameWrapper={styles.sizeBtn}
                  >
                    <IconCopy className={styles.icon} />
                    Ссылка
                  </Button>
                  <Button
                    type="button"
                    viewType="green"
                    classNameWrapper={styles.sizeBtn}
                  >
                    Начать
                  </Button>
                </div>
                <div className={styles.dotsItems}>
                  <p className={styles.dotItem} />
                  <p className={styles.dotItem} />
                  <p className={styles.dotItem} />
                </div>
              </div>
            </div>
            <div className={cx(styles.flexGroupLive, styles.contentBetween, styles.marginRight, styles.lastItem)}>
              <div className={cx(styles.firstTitleContentInfo, styles.flexGroupLive, styles.column)}>
                <div className={styles.flexGroupLive}>
                  <h4 className={styles.mainTitle}>Вечерняя йога</h4>
                  <p className={cx(styles.medium, styles.colorGreen)}>500₴</p>
                </div>
                <div>
                  <Button
                    classNameWrapper={styles.greyBtn}
                    type="button"
                  >
                    <IconEdit className={styles.icon} />
                    Редактировать промо-сайт
                  </Button>
                </div>
              </div>
              <div className={cx(styles.secondTitleContentInfo, styles.flexGroupLive)}>
                <p className={styles.medium}>25</p>
                <a className={styles.showMore} href="/">Показать</a>
              </div>
              <div className={styles.titleContentInfo}>
                <p className={styles.medium}>9 860₴</p>
              </div>
              <div className={cx(styles.lastTitleContentInfo, styles.column)}>
                <h4>Вчера, 12:30</h4>
                <div>
                  <Button
                    type="button"
                    classNameWrapper={styles.greyBtn}
                  >
                    <IconCalendar className={styles.icon} />
                    Запланировать
                  </Button>
                </div>
                <div className={styles.dotsItems}>
                  <p className={styles.dotItem} />
                  <p className={styles.dotItem} />
                  <p className={styles.dotItem} />
                </div>
              </div>
            </div>
          </div>
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
        <div className={cx(styles.flexGroupLive, styles.column, styles.marginBottom)}>
          <div className={styles.incomeInfo}>
            <p>1 512</p>
            <p>Аудитория</p>
          </div>
          <div className={styles.incomeInfo}>
            <p className={styles.colorGreen}>+12</p>
            <p>Новая с последнего занятия</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
