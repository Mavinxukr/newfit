import React from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.scss';

const Questions = ({ data }) => (
  <div className={styles.question}>
    {data && data.map((item) => (
      <div className={styles.flex} key={item.id}>
        <button type="button" className={styles.btnPlus}>
          +
        </button>
        <div>
          <p className={styles.questionText}>{item.question}</p>
          <span className={styles.name}>{item.name}</span>
        </div>
      </div>
    ))}
  </div>
);

Questions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    question: PropTypes.string,
    id: PropTypes.number,
  })),
};

export default Questions;
