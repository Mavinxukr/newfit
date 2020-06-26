import React from 'react';
import propTypes from 'prop-types';
import BroadcastCard from '../BroadcastCard/BroadcastCard';
import styles from './BroadcastCards.scss';

const BroadcastCards = ({ data }) => (
  <>
    {data && data.map((item) => (
      <>
        {item.title && <h4 className={styles.title}>{item.title} <span>{item.blocks.length}</span></h4>}
        <div className={styles.flex}>
          {item.blocks.map((itemChild) => (
            <BroadcastCard
              key={itemChild.id}
              image={itemChild.image}
              question={itemChild.question}
              name={itemChild.name}
            />
          ))}
        </div>
      </>
    ))}
  </>
);

BroadcastCards.propTypes = {
  data: propTypes.array,
};

export default BroadcastCards;
