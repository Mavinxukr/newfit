import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Checkbox.scss';

const classNamesButton = {
  simple: styles.labelSimple,
  slider: styles.labelSlider,
};

const Checkbox = ({
  input, classNameWrapper, label, viewType, id, name, children,
}) => (
  <div className={cx(styles.wrapper, classNameWrapper)}>
    <input {...input} id={id} className={styles.input} name={name} type="checkbox" /> {/*eslint-disable-line*/}
    {label && (
    <label className={cx(styles.label, classNamesButton[viewType])} htmlFor={id}>
      {children}
    </label>
    )}
    {viewType === 'slider' && (
    <div className={styles.slider}>
      <span className={styles.sliderWhole} />
    </div>
    )}
  </div>
);

Checkbox.propTypes = {
  input: PropTypes.object,
  classNameWrapper: PropTypes.string,
  label: PropTypes.string,
  viewType: PropTypes.oneOf(
    ['simple', 'slider'],
  ),
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default Checkbox;
