import React, { useState, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconArrow from '../../static/svg/arrow.svg';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import styles from './Accordion.scss';

const Accordion = ({
  title, children, classNameWrapper, onClick,
}) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');

  const content = useRef();
  const sensitive = useRef();

  const toggleAccordion = () => {
    setActive(!active);
    setHeight(
      active ? '0px' : `${content.current.scrollHeight}px`,
    );
    onClick();
  };

  useOnClickOutside(sensitive, () => {
    setActive(false);
    setHeight('0px');
  });

  return (
    <div className={cx(styles.accordionSection, classNameWrapper, { [styles.active]: active })} ref={sensitive}>
      <button type="button" className={styles.accordion} onClick={toggleAccordion}>
        <p className={styles.text}>{title}</p>
        <IconArrow className={cx(styles.icon, { [styles.iconRotate]: active })} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={cx(styles.accordionContent, { [styles.activeContent]: active })}
      >
        {children}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  classNameWrapper: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Accordion;
