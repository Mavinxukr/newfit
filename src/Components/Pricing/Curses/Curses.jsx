import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '../../../UI-Kit/Accordion/Accordion';
import styles from './Curses.scss';

const Curses = ({ image, data }) => (
  <div className={styles.flex}>
    <div className={styles.imageBlock}>
      {image && (<img src={image} alt="" />)}
    </div>
    <div className={styles.rightBlock}>
      {data.map((item) => (
        <>
          <h3 className={styles.title}>{item.title}</h3>
          {item.accordion.map((itemChild) => (
            <Accordion title={itemChild.title}>
              {itemChild.content}
            </Accordion>
          ))}
        </>
      ))}
    </div>
  </div>
);

Curses.propTypes = {
  image: PropTypes.string,
  data: PropTypes.array,
};

export default Curses;
