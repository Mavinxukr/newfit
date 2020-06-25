import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  children,
  classNameWrapper,
  onClick,
  href,
  type,
  viewType,
  disabled,
}) => {
  const TagName = href ? 'a' : 'button';

  return (
    <TagName
      disabled={disabled}
      href={href}
      type={type}
      onClick={onClick}
      className={cx(styles.button, classNameWrapper, `${styles.button}_${viewType}`)}
    >
      {children}
    </TagName>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  classNameWrapper: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.string,
  viewType: PropTypes.oneOf(
    ['white', 'black', 'grey', 'green', 'smallGreen', 'red', 'simpleCopy', 'link'],
  ),
  disabled: PropTypes.bool,
};

export default Button;
