import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../UI-Kit/Button/Button';
import IconLink from '../../../static/svg/Group2331.svg';
import styles from './PaymentCard.scss';

const PaymentCard = ({ item }) => (
  <article className={styles.wrapper}>
    {item.title && <h1 className={styles.title}>{item.title}</h1>}
    <div className={styles.info}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoParticipants}>
          <p className={styles.infoParticipantsCount}>{item.amountParticipant}</p>
          <p className={styles.infoParticipantsText}>Участников</p>
        </div>
        {item.date && (
          <div className={styles.infoDate}>
            <p className={styles.infoDateCount}>{item.date}</p>
            <p className={styles.infoDateText}>Дата</p>
          </div>
        )}
      </div>
      <p className={styles.price}>
        {item.price} <span className={styles.currency}>{item.currency}</span>
      </p>
    </div>
    <div className={styles.occupationLink}>
      {item.link && (
        <>
          <p className={styles.occupationLinkActiveText}>Ссылка для участия</p>
          <Button
            viewType="linkOccupation"
            href
            classNameWrapper={styles.buttonLink}
          >
            {item.link}
            <IconLink className={styles.iconLink} />
          </Button>
        </>
      ) || (
        <p className={styles.occupationLinkText}>Тренер удалил занятие</p>
      )}
    </div>
  </article>
);

PaymentCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    amountParticipant: PropTypes.number,
    currency: PropTypes.string,
    price: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default PaymentCard;
