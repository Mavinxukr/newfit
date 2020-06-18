import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import OkIcon from '../../static/svg/Path324.svg';
import styles from './Input.scss';

const Input = ({
  formProps: {
    value,
    onChange,
  },
  placeholder,
  name,
  viewType,
  type,
  isError,
  classNameWrapper,
}) => {
  const [status, setStatus] = useState('noActive');

  const classNameForInput = cx(classNameWrapper, {
    [styles.entryInput]: viewType === 'entry',
    [styles.entryInputNoActive]: viewType === 'entry' && status === 'noActive',
    [styles.entryInputActive]: viewType === 'entry' && status === 'active',
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
      <input
        type={type}
        value={value}
        onFocus={() => setStatus('active')}
        onChange={(e) => onChange(e)}
        className={classNameForInput}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  formProps: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string,
  }),
  isError: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  viewType: PropTypes.string,
  classNameWrapper: PropTypes.string,
};

export default Input;
