import React, { useState, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconArrow from '../../static/svg/arrow.svg';
import Button from '../Button/Button';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import styles from './Accordion.scss';

const Accordion = ({ title, children, classNameWrapper }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');

  const content = useRef();
  const sensitive = useRef();

  const toggleAccordion = () => {
    setActive(!active);
    setHeight(
      active ? '0px' : `${content.current.scrollHeight}px`,
    );
  };

  useOnClickOutside(sensitive, () => {
    setActive(false);
    setHeight('0px');
  });

  return (
    <div ref={sensitive}>
      <div className={cx(styles.accordionSection, classNameWrapper, { [styles.active]: active })}>
        <Button type="button" classNameWrapper={styles.accordion} onClick={toggleAccordion}>
          <p>{title}</p>
          <IconArrow className={cx(styles.icon, { [styles.iconRotate]: active })} />
        </Button>
        <div
          ref={content}
          style={{ maxHeight: `${height}` }}
          className={cx(styles.accordionContent, { [styles.activeContent]: active })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  classNameWrapper: PropTypes.string,
  title: PropTypes.string,
};

export default Accordion;
