import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardForm from '../CardForm/CardForm';
import Button from '../../../UI-Kit/Button/Button';
import Withdraw from '../Withdraw/Withdraw';
import withPopup from '../../../HOC/withPopup';
import { getFinance } from '../../../actions/finance';
import { getUserCard } from '../../../actions/userCard';
import { getIncome } from '../../../actions/income';
import { isEmptyObject, sliceCard } from '../../../utils';
import {
  financeSelector, userCardSelector, incomeSelector, userDataSelector,
} from '../../../selectors';
import styles from './Layout.scss';

const Layout = ({ openPopup }) => {
  const [isOpenCardForm, setIsOpenCardForm] = useState(false);

  const finance = useSelector(financeSelector);
  const userCard = useSelector(userCardSelector);
  const income = useSelector(incomeSelector);
  const userData = useSelector(userDataSelector);

  const { data = [] } = income;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinance());
    dispatch(getUserCard());
    dispatch(getIncome());
  }, []);

  return (
    <div className={styles.mainContent}>
      <h3>Финансы</h3>
      <div className={cx(styles.contentInfoFinance, styles.infoFinanceMain)}>
        <div className={cx(styles.flex, styles.contentBetween)}>
          <div className={styles.column}>
            <p className={styles.balance}>{userData.money} ₴</p>
            <span className={cx(styles.opacityText, styles.balanceText)}>На вашем аккаунте</span>
          </div>
          <Button
            classNameWrapper={styles.buttonWithdraw}
            type="button"
            viewType={(isEmptyObject(userCard) || 0) && 'grey' || 'green'}
            disabled={isEmptyObject(userCard) || 0}
            onClick={() => {
              openPopup({
                PopupContentComponent: Withdraw,
                content: {
                  cardNumber: userCard.card_number,
                  name: userCard.name,
                },
              });
            }}
          >
            Вывести
          </Button>
        </div>
        <div className={styles.flex}>
          <div className={styles.contentMoreInfo}>
            <h5>Выводы</h5>
            {finance.length && finance.map((item) => (
              <div key={item.id} className={styles.findings}>
                <p className={styles.withdrawText}>{item.created_at}</p>
                <p className={cx(styles.withdrawText, styles.mediaPos)}>{item.card_name} … {sliceCard(item.card_number)}</p>
                <p className={cx(styles.opacityTextFindings, styles.withdrawText)}>{item.status}</p>
                <p className={styles.withdrawText}>{item.sum}₴</p>
              </div>
            )) || <p className={styles.contentCenter}>Пока не было</p>}
          </div>
          <div className={styles.contentMoreInfo}>
            <h5 className={styles.titleFinance}>Доходы</h5>
            {data.length && data.map((item) => (
              <div className={styles.finance}>
                <p className={styles.withdrawText}>{item.payment_at}</p>
                <p className={styles.withdrawText}>{item.name}</p>
                <p className={styles.withdrawText}>+ {item.cost}₴</p>
              </div>
            )) || <p className={styles.contentCenter}>Пока не было</p>}
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
              defaultName={userCard.name}
              defaultNumber={`54551${userCard.card_number}`}
            />
            ) || (
            <>
              {!isEmptyObject(userCard) ? (
                <>
                  <p className={styles.text}>{userCard.name} ... {sliceCard(userCard.card_number)}</p>
                  <Button
                    classNameWrapper={styles.btn}
                    type="button"
                    onClick={() => setIsOpenCardForm(true)}
                  >Редактировать
                  </Button>
                </>
              ) : <CardForm setIsOpenCardForm={setIsOpenCardForm} />}
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
