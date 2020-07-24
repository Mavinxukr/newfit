import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import styles from './ReduxInputWrapper.scss';

const ReduxInputWrapper = ({
  input,
  meta: { touched, error },
  label,
  defaultValue,
  classNameWrapper,
  name,
  viewType,
  type,
  placeholder,
  classNameWrapperForInput,
}) => (
  <div className={cx(styles.wrapper, classNameWrapper)}>
    {label && (
    <label
      htmlFor={name}
      className={styles.label}
    >
      {label}
    </label>
    )}
    <Input
      formProps={input}
      isError={!!touched && !!error}
      type={type}
      viewType={viewType}
      placeholder={placeholder}
      classNameWrapper={classNameWrapperForInput}
      defaultValue={defaultValue}
    />
    {touched
      && error && (
        <p className={styles.errorText}>{error}</p>
    )}
  </div>
);

ReduxInputWrapper.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }),
  classNameWrapper: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  viewType: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  classNameWrapperForInput: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default ReduxInputWrapper;
