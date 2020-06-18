import React from 'react';
import cx from 'classnames';
import IconLogo from '../../../static/svg/EF.svg';
import styles from './Layout.scss';

const Layout = () => (
  <>
    <header className={styles.header}>
      <a href="/">
        <IconLogo />
        <span className={styles.logoText}>Тренер</span>
      </a>
      <div>
        <a className={styles.headerLink} href="/">Подписки</a>
        <a className={cx(styles.headerLink, styles.opacityText)} href="/">Возможности</a>
      </div>
      <div className={styles.headerSocial}>
        <p className={styles.socialText}>Онлайн-чат с нами</p>
        <a href="/" className={styles.socialLink}>a</a>
        <a href="/" className={styles.socialLink}>b</a>
        <a href="/" className={styles.socialLink}>v</a>
      </div>
    </header>
  </>
);

export default Layout;
