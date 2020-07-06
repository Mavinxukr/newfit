import React, { useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconArrow from '../../static/svg/arrow.svg';
import IconArrowFAQ from '../../static/svg/Path125.svg';
import styles from './Accordion.scss';

const Accordion = ({
  title, children, classNameWrapper, onClick, viewType, isDefaultActive,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(isDefaultActive);
  }, []);

  const content = useRef();
  const sensitive = useRef();

  const toggleAccordion = async () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  };

  const AppropriateIcon = viewType === 'tabs' && IconArrow || IconArrowFAQ;

  return (
    <div
      className={cx(cx(styles.accordionWrapper, {
        [styles.accordionTabs]: viewType === 'tabs',
        [styles.accordionFAQ]: viewType === 'faq',
      }), classNameWrapper, {
        [styles.activeTab]: active && viewType === 'tabs',
        [styles.activeFAQ]: active && viewType === 'faq',
      })}
      ref={sensitive}
    >
      <button type="button" className={styles.accordion} onClick={toggleAccordion}>
        <p className={cx({
          [styles.text]: viewType === 'tabs',
          [styles.textFAQ]: viewType === 'faq',
        })}
        >{title}
        </p>
        <AppropriateIcon className={cx(cx({
          [styles.iconTab]: viewType === 'tabs',
          [styles.iconFAQ]: viewType === 'faq',
        }), { [styles.iconRotate]: active })}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${!active ? 0 : content?.current?.scrollHeight || 0}px` }}
        className={styles.accordionContent}
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
  viewType: PropTypes.string,
  isDefaultActive: PropTypes.bool,
};

export default Accordion;
