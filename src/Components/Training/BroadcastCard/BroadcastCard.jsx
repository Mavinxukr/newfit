import React from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';
import styles from './BroadcastCard.scss';

const BroadcastCard = ({ image, name = 'dad', question = 'asdasds?' }) => {
  const buttonTop = cx(styles.topBtn, { [styles.withImage]: image });
  const questionText = cx(styles.question, { [styles.withImage]: image });
  const quote = cx(styles.quoteBtn, { [styles.withImage]: image });

  return (
    <div className={styles.broadcastCard} style={{ backgroundImage: `url(${image})` }}>
      <button className={buttonTop} type="button">
        {name} +
      </button>
      <h4 className={questionText}>{question}</h4>
      <button className={quote} type="button">+ Цитировать</button>
    </div>
  );
};

BroadcastCard.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  question: propTypes.string,
};

export default BroadcastCard;
