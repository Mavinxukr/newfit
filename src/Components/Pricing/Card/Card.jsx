import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Slider from '../../../UI-Kit/Slider/Slider';
import Button from '../../../UI-Kit/Button/Button';
import styles from './Card.scss';

const Card = ({
  imageSrc,
  discount,
  price,
  countParticipant,
  setCountParticipant,
  classNameWrapper,
  isBigCard,
}) => (
  <article className={cx(styles.wrapper, classNameWrapper)}>
    <img className={styles.image} src={imageSrc} alt={imageSrc} />
    <div className={styles.content}>
      <h3 className={styles.title}>{countParticipant} участников</h3>
      {isBigCard && (
        <Slider
          setCountParticipant={setCountParticipant}
          defaultValue={countParticipant}
          classNameWrapper={styles.sliderWrapper}
        />
      )}
      <hr className={styles.line} />
      <div className={cx(styles.pricingWrapper, {
        [styles.pricingWrapperBigCard]: isBigCard,
      })}
      >
        <p className={cx(styles.price, {
          [styles.priceBigCard]: isBigCard,
        })}
        >
          <span className={styles.priceDiscount}>-{discount}%</span>
          <span className={styles.priceCount}>{price}$</span>
          <span className={styles.pricePeriod}>/ месяц</span>
        </p>
        <p className={styles.offer}>Докупить за 0,10$ / 1 участник</p>
      </div>
      <Button
        classNameWrapper={styles.button}
        viewType="green"
      >
        Купить подписку до {countParticipant} участников
      </Button>
    </div>
  </article>
);

Card.propTypes = {
  imageSrc: PropTypes.string,
  classNameWrapper: PropTypes.string,
  discount: PropTypes.number,
  price: PropTypes.number,
  countParticipant: PropTypes.number,
  isBigCard: PropTypes.bool,
  setCountParticipant: PropTypes.func,
};

export default Card;
