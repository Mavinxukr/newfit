import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const SimpleCopy = ({ children, onClick, classNameWrapper }) => (
  <Button classNameWrapper={classNameWrapper} viewType="simpleCopy" type="button" onClick={onClick}>
    {children}
  </Button>
);

SimpleCopy.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  classNameWrapper: PropTypes.string,
};

export default SimpleCopy;
