import React from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.scss';

const Questions = ({ data }) => (
  <div className={styles.question}>
    {data && data.map((item) => (
      <div key={item.id}>
        <button type="button" className={styles.btnPlus}>
          +
        </button>
        <p>{item.question}</p>
        <span>{item.name}</span>
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
