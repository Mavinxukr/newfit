import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  children,
  classNameWrapper,
  onClick,
  href,
  type,
  viewType,
  disabled,
  active,
}) => {
  const TagName = href ? 'a' : 'button';

  const classNameForButton = cx(cx(styles.button, classNameWrapper), {
    [styles.buttonForm]: viewType === 'formButton',
    [styles.buttonFormActive]: viewType === 'formButton' && active,
    [styles.buttonBlack]: viewType === 'black',
    [styles.buttonGrey]: viewType === 'grey',
    [styles.buttonGreen]: viewType === 'green',
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
  viewType: PropTypes.oneOf(['formButton', 'black', 'grey', 'green']),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

export default Button;
