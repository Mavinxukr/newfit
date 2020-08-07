import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { copyText } from '../../utils';
import styles from './SimpleCopy.scss';

const SimpleCopy = ({
  children, classNameWrapper, copyValue,
}) => (
  <>
    <input type="text" className={styles.hiddenInput} value={copyValue} />
    <Button
      classNameWrapper={classNameWrapper}
      viewType="simpleCopy"
      type="button"
      onClick={() => copyText(`.${styles.hiddenInput}`)}
    >
      {children}
    </Button>
  </>
);

SimpleCopy.propTypes = {
  children: PropTypes.node,
  classNameWrapper: PropTypes.string,
  copyValue: PropTypes.string,
};

export default SimpleCopy;
