import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Select.scss';

const Select = ({
  options, setValue, value, classNameWrapper, defaultValue,
}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  return (
    <div className={cx(styles.selectWrapper, classNameWrapper)}>
      <button
        type="button"
        onClick={() => setIsOpenSelect(!isOpenSelect)}
        className={styles.selectButton}
      >
        {defaultValue && defaultValue.label || value && value.label}
      </button>
      {isOpenSelect && (
        <ul>
          {options && options.map((item) => (
            <li key={item.value}>
              <button
                type="button"
                onClick={() => {
                  setValue(item);
                  setIsOpenSelect(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) || (
        <p>нет опций</p>
      )}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  })),
  setValue: PropTypes.func,
  value: PropTypes.bool,
  classNameWrapper: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Select;
