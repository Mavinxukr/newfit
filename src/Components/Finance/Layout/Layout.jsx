import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardForm from '../CardForm/CardForm';
import Button from '../../../UI-Kit/Button/Button';
import Withdraw from '../Withdraw/Withdraw';
import withPopup from '../../../HOC/withPopup';
import styles from './Layout.scss';

const Layout = ({ openPopup }) => {
  const [isOpenCardForm, setIsOpenCardForm] = useState(false);

  return (
    <div className={styles.mainContent}>
      <h3>Финансы</h3>
      <div className={cx(styles.contentInfoFinance, styles.infoFinanceMain)}>
        <div className={cx(styles.flex, styles.contentBetween)}>
          <div className={styles.column}>
            <p className={styles.balance}>18 990,89₴</p>
            <span className={cx(styles.opacityText, styles.balanceText)}>На вашем аккаунте</span>
          </div>
          <Button
            classNameWrapper={styles.buttonWithdraw}
            type="button"
            viewType="green"
            onClick={() => {
              openPopup({
                PopupContentComponent: Withdraw,
              });
            }}
          >
            Вывести
          </Button>
        </div>
        <div className={styles.flex}>
          <div className={styles.contentMoreInfo}>
            <h5>Выводы</h5>
            {/* <p className={styles.contentCenter}>Пока не было</p> */}
            <div className={styles.findings}>
              <p className={styles.withdrawText}>11 Апр, 2020</p>
              <p className={cx(styles.withdrawText, styles.mediaPos)}>Ethan Pierce … 9301</p>
              <p className={cx(styles.opacityTextFindings, styles.withdrawText)}>Ждет подтверждения</p>
              <p className={styles.withdrawText}>6 314,00₴</p>
            </div>
            <div className={styles.findings}>
              <p className={styles.withdrawText}>2 Апр, 2020</p>
              <p className={cx(styles.withdrawText, styles.mediaPos)}>Ethan Pierce … 9301</p>
              <p className={cx(styles.opacityTextFindings, styles.withdrawText)} />
              <p className={styles.withdrawText}>2 522,10₴</p>
            </div>
          </div>
          <div className={styles.contentMoreInfo}>
            <h5 className={styles.titleFinance}>Доходы</h5>
            <div className={styles.finance}>
              <p className={styles.withdrawText}>с 25 Июнь, 2019</p>
              <p className={styles.withdrawText}>Hardcore Crossfit</p>
              <p className={styles.withdrawText}>+ 54 009,24₴</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(styles.flex, styles.contentFlexStart)}>
        <div className={cx(styles.contentInfoFinance, styles.fullWidth)}>
          <div className={cx(styles.flex, styles.contentBetween)}>
            <div className={styles.column}>
              <h4>Мои подписки</h4>
              <span className={cx(styles.opacityText, styles.balanceText)}>Бесплатная версия</span>
            </div>
            <Link to="/pricing" className={styles.btnEdit}>
              <Button classNameWrapper={styles.buttonWithdraw} type="button" viewType="white">
                Узнать больше о подписке
              </Button>
            </Link>
          </div>
          <div className={cx(styles.flex, styles.contentBottom, styles.contentFlexStart)}>
            <div className={styles.column}>
              <p className={styles.titleLive}>Групповой Live</p>
            </div>
            <div className={styles.itemContent}>
              <p className={styles.itemContentDesc}>
                Вы можете планировать занятие, выставлять стоимость,
                принемать и выводить оплату от клиентов
              </p>
              <ul className={styles.itemContentPriceWrapper}>
                <li className={styles.itemContentPrice}>
                  <p className={styles.itemContentPriceTitle}>Оплата</p>
                  <p className={styles.itemContentPriceDesc}>+5% комиссия — комиссия платежной системы (для оплаты участия в занятии вашим клиентам)</p>
                </li>
                <li className={styles.itemContentPrice}>
                  <p className={styles.itemContentPriceTitle}>Вывод</p>
                  <p className={styles.itemContentPriceDesc}>+5% комиссия (чтобы вывести доход)</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx(styles.flex, styles.contentBottom, styles.contentFlexStart)}>
            <div className={styles.column}>
              <p className={styles.titleLive}>Групповой Live</p>
            </div>
            <div className={styles.itemContent}>
              <p className={styles.itemContentDesc}>
                Когда вы запланировали занятие, создается странница,
                на которую попадают все Ваши клиенты, чтобы оплатить участие
                (на которой: Название, Количество Участников (те кто оплатили),
                Стоимость и Дата)
              </p>
            </div>
          </div>
        </div>
        <div className={cx(styles.contentInfoFinance, styles.fullWidth)}>
          <div className={cx(styles.flex, styles.contentBetween, styles.titleMethodBlock)}>
            <div className={styles.column}>
              <h4>Методы оплаты</h4>
              <span className={cx(styles.opacityText, styles.balanceText)}>Вывод и оплата</span>
            </div>
          </div>
          <div className={cx(styles.flex, styles.contentBottom, styles.cards)}>
            <h5 className={styles.titleTotal}>Вывод</h5>
            {isOpenCardForm && (
            <CardForm
              setIsOpenCardForm={setIsOpenCardForm}
              defaultName="Кирилл"
              defaultNumber="3453 3454 3453 3455"
            />
            ) || (
            <>
              <p className={styles.text}>Ethan Pierce ... 9301</p>
              <Button
                classNameWrapper={styles.btn}
                type="button"
                onClick={() => setIsOpenCardForm(true)}
              >Редактировать
              </Button>
            </>
            )}
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
