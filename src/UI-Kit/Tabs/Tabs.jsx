import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Tabs.scss';

const Tabs = ({
  classNameWrapper, tabs, activeTab, onChange,
}) => {
  const getTab = (item, index) => {
    const isActive = activeTab === index;
    const buttonProps = {
      type: 'button',
      className: cx(styles.tabButton, { [styles.tabButtonActive]: isActive }),
      onClick: () => onChange(index),
    };

    return (
      <div className={cx(styles.tabButtonWrapper, { [styles.tabButtonWrapperActive]: isActive })}>
        <button {...buttonProps}>{item}</button> {/*eslint-disable-line*/}
      </div>
    );
  };

  return (
    <div className={cx(styles.wrapper, classNameWrapper)}>
      {tabs.map(getTab)}
    </div>
  );
};

Tabs.propTypes = {
  classNameWrapper: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  activeTab: PropTypes.number,
  onChange: PropTypes.func,
};

export default Tabs;
