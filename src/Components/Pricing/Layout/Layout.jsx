import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../../../UI-Kit/Button/Button';
import IconLogo from '../../../static/svg/EF.svg';
import IconFacebook from '../../../static/svg/facebook1.svg';
import IconTelegram from '../../../static/svg/telegram1.svg';
import IconEmail from '../../../static/svg/email1.svg';
import IconFooterArrow from '../../../static/svg/footerArrow.svg';
import styles from './Layout.scss';

const Layout = () => (
  <>
    <header className={styles.header}>
      <Link to="/">
        <IconLogo />
        <span className={styles.logoText}>Тренер</span>
      </Link>
      <div>
        <a className={styles.headerLink} href="/">Подписки</a>
        <a className={cx(styles.headerLink, styles.opacityText)} href="/">Возможности</a>
      </div>
      <div className={styles.headerSocial}>
        <p className={styles.socialText}>Онлайн-чат с нами</p>
        <Link to="/" className={styles.socialLink}>
          <IconFacebook />
        </Link>
        <Link to="/" className={styles.socialLink}>
          <IconTelegram />
        </Link>
        <Link to="/" className={styles.socialLink}>
          <IconEmail />
        </Link>
      </div>
    </header>
    <main className={styles.content}>
      da
    </main>
    <footer className={styles.footer}>
      <Button type="button" classNameWrapper={styles.footerButton}>
        Связать с менеджером <IconFooterArrow className={styles.footerIcon} />
      </Button>
    </footer>
  </>
);

export default Layout;
