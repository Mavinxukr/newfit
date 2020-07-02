import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '../../../UI-Kit/Accordion/Accordion';
import image from '../../../static/images/photo_2020-06-20_11-48-44.jpg';
import styles from './Curses.scss';

const Curses = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(image);

  return (
    <div className={styles.flex}>
      <img src={selectedImage} alt="" className={styles.imageBlock} />
      <div className={styles.rightBlock}>
        {data.map((item) => (
          <>
            <h3 className={styles.title}>{item.title}</h3>
            {item.accordion.map((itemChild) => (
              <Accordion title={itemChild.title} onClick={() => setSelectedImage(itemChild.image)}>
                {itemChild.content}
              </Accordion>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

Curses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    accordion: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })),
  })),
};

export default Curses;
