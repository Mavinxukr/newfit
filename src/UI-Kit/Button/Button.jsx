import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const classNamesButton = {
  green: styles.buttonGreen,
  grey: styles.buttonGrey,
  simpleCopy: styles.buttonSimpleCopy,
  black: styles.buttonBlack,
  white: styles.buttonWhite,
  smallGreen: styles.buttonSmallGreen,
  red: styles.buttonRed,
  link: styles.buttonLink,
  small: styles.buttonSmall,
  simple: styles.buttonSimple,
  indicator: styles.buttonIndicator,
  linkOccupation: styles.linkOccupation,
};

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
      className={cx(styles.button, classNameWrapper, classNamesButton[viewType])}
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
    ['white', 'black', 'grey', 'green', 'smallGreen', 'red', 'simpleCopy', 'small', 'link', 'simple', 'indicator', 'linkOccupation'],
  ),
  disabled: PropTypes.bool,
};

export default Button;
