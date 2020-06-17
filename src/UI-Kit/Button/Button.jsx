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

  const classNameForButton = cx(cx(styles.button, classNameWrapper), {
    [styles.buttonBlack]: viewType === 'black',
    [styles.buttonGrey]: viewType === 'grey',
    [styles.buttonGreen]: viewType === 'green',
    [styles.buttonWhite]: viewType === 'white',
  });

  return (
    <TagName
      disabled={disabled}
      href={href}
      type={type}
      onClick={onClick}
      className={classNameForButton}
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
  viewType: PropTypes.oneOf(['white', 'black', 'grey', 'green']),
  disabled: PropTypes.bool,
};

export default Button;
