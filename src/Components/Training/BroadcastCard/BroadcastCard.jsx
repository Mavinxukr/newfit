import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconPlus from '../../../static/svg/Group3221.svg';
import styles from './BroadcastCard.scss';

const getClassNames = (elem, image) => {
  const classNames = {
    topBtn: styles.topBtn,
    question: styles.question,
    quoteBtn: styles.quoteBtn,
    iconPlus: styles.iconPlus,
  };

  return cx(classNames[elem], {
    [styles.withImage]: image,
  });
};

const BroadcastCard = ({ image, name = 'name', question }) => (
  <div className={cx(styles.broadcastCard, {
    [styles.background]: !image,
    [styles.withoutBackground]: !question,
  })}
  >
    <button className={getClassNames('topBtn', image)} type="button">
      {name}
      {image && <IconPlus className={styles.iconPlusUser} />}
    </button>
    {question && (
      <>
        <h4 className={cx(getClassNames('question', image), {
          [styles.questionBeforeGrey]: !image,
        })}
        >{question}
        </h4>
        <button className={getClassNames('quoteBtn', image)} type="button">
          <IconPlus className={getClassNames('iconPlus', image)} />  Цитировать
        </button>
      </>
    )}
  </div>
);

BroadcastCard.propTypes = {
  image: PropTypes.bool,
  name: PropTypes.string,
  question: PropTypes.string,
};

export default BroadcastCard;
