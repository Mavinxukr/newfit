import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import OkIcon from '../../static/svg/Path324.svg';
import styles from './Input.scss';

const Input = ({
  formProps: {
    value,
    onChange,
    onBlur,
    name,
  },
  placeholder,
  viewType,
  type,
  isError,
  classNameWrapper,
  defaultValue,
}) => {
  const [status, setStatus] = useState(defaultValue && 'active' || 'noActive');

  const classNameForInput = cx(styles.inputWrapper, classNameWrapper, {
    [styles.entryInput]: viewType === 'entry',
    [styles.entryInputNoActive]: viewType === 'entry' && status === 'noActive',
    [styles.entryInputActive]: viewType === 'entry' && status === 'active',
    [styles.inputNewLive]: viewType === 'newLive',
    [styles.inputFinance]: viewType === 'finance',
  });

  return (
    <div className={styles.inputWrapper}>
      {viewType === 'entry' && name !== 'name'
       && (status === 'noActive' || !isError)
       && (
       <OkIcon className={cx(styles.icon, {
         [styles.correctIcon]: !isError && status === 'active',
       })}
       />
       )}
      {viewType === 'entry' && isError && (
        <span className={styles.errorLine} />
      )}
      {viewType === 'newLive' && (
        <span className={styles.currency}>$</span>
      )}
      <input
        type={type}
        value={value || defaultValue}
        onFocus={() => setStatus('active')}
        onChange={onChange}
        className={classNameForInput}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        maxLength={40}
      />
    </div>
  );
};

Input.propTypes = {
  formProps: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
  }),
  isError: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  viewType: PropTypes.string,
  classNameWrapper: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Input;
