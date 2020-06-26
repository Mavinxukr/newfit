import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../../../UI-Kit/Button/Button';
import Stars from '../../../UI-Kit/Stars/Stars';
import IconLogo from '../../../static/svg/EF.svg';
import confetti from '../../../static/images/confetti_PNG87034.png';
import styles from './Layout.scss';

const Mark = ({ title, amount, isActive }) => (
  <p className={cx(styles.wrapperMark, {
    [styles.wrapperMarkColorGreen]: isActive,
  })}
  >
    <span className={styles.markAmount}>{amount}</span>
    <span className={styles.markTitle}>{title}</span>
  </p>
);

const Layout = () => (
  <>
    <div className={styles.container}>
      <IconLogo className={styles.iconLogo} />
      <img src={confetti} alt="confetti" className={styles.imageConfettiRight} />
      <img src={confetti} alt="confetti" className={styles.imageConfettiLeft} />
      <div className={styles.content}>
        <h3>Вуху! Можно передохнуть</h3>
        <div className={styles.marksWrapper}>
          <Mark amount="50" title="участвовало" isActive />
          <Mark amount="1:30" title="Время" />
          <Mark amount="38" title="камер" />
        </div>
        <Stars classNameWrapper={styles.stars} />
        <p className={styles.text}>Только что проголосовали (38)</p>
      </div>
    </div>
    <Button
      href
      classNameWrapper={styles.buttonClose}
      viewType="simple"
    >
      Закрыть страницу
    </Button>
  </>
);

Mark.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Layout;
