import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Questions.scss';

const Questions = ({ data, selectedQuestion, setSelectedQuestion }) => (
  <div className={styles.question}>
    {data && data.map((item) => {
      const isActiveButton = item.id === selectedQuestion?.id;

      return (
        <div className={styles.flex} key={item.id}>
          <button
            type="button"
            className={cx(styles.btnPlus, {
              [styles.btnPlusActive]: isActiveButton,
            })}
            onClick={() => {
              if (isActiveButton && selectedQuestion) {
                setSelectedQuestion(null);
              } else {
                setSelectedQuestion(item);
              }
            }}
          >
            <p className={cx(styles.text, { [styles.plusRotate]: isActiveButton })}>+</p>
          </button>
          <div className={styles.contentWrapper}>
            <p className={styles.questionText}>{item.question}</p>
            <span className={styles.name}>{item.name}</span>
          </div>
        </div>
      );
    })}
  </div>
);

Questions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    question: PropTypes.string,
    id: PropTypes.number,
  })),
  setSelectedQuestion: PropTypes.func,
  selectedQuestion: PropTypes.object,
};

export default Questions;
