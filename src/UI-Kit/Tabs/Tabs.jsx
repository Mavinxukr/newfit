import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Tabs.scss';

const Tabs = ({
  classNameWrapper, tabs, activeTab, onChange,
}) => (
  <div className={cx(styles.wrapper, classNameWrapper)}>
    {tabs.map((item, index) => (
      <div className={cx(styles.tabButtonWrapper, {
        [styles.tabButtonWrapperActive]: activeTab === index,
      })}
      >
        <button
          onClick={() => onChange(index)}
          type="button"
          className={cx(styles.tabButton, {
            [styles.tabButtonActive]: activeTab === index,
          })}
        >{item}
        </button>
      </div>
    ))}
  </div>
);

Tabs.propTypes = {
  classNameWrapper: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  activeTab: PropTypes.number,
  onChange: PropTypes.func,
};

export default Tabs;
