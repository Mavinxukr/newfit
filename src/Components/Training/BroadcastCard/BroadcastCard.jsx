import React from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';
import styles from './BroadcastCard.scss';

const getClassNames = (elem, image) => {
  const classNames = {
    topBtn: styles.topBtn,
    question: styles.question,
    quoteBtn: styles.quoteBtn,
  };

  return cx(classNames[elem], {
    [styles.withImage]: image,
  });
};

const BroadcastCard = ({ image, name = 'name', question }) => (
  <div className={cx(styles.broadcastCard, { [styles.background]: !image })}>
    <button className={getClassNames('topBtn', image)} type="button">
      {name}
      {image && '+'}
    </button>
    {question && (
      <>
        <h4 className={getClassNames('question', image)}>{question}</h4>
        <button className={getClassNames('quoteBtn', image)} type="button">+ Цитировать</button>
      </>
    )}
  </div>
);

BroadcastCard.propTypes = {
  image: propTypes.bool,
  name: propTypes.string,
  question: propTypes.string,
};

export default BroadcastCard;
