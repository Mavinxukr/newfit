import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../../../UI-Kit/Button/Button';
import Accordion from '../../../UI-Kit/Accordion/Accordion';
import IconLogo from '../../../static/svg/EF.svg';
import IconFacebook from '../../../static/svg/facebook1.svg';
import IconTelegram from '../../../static/svg/telegram1.svg';
import IconEmail from '../../../static/svg/email1.svg';
import IconFooterFacebook from '../../../static/svg/facebook.svg';
import IconFooterTelegram from '../../../static/svg/telegram.svg';
import IconFooterEmail from '../../../static/svg/email.svg';
import IconFooterArrow from '../../../static/svg/footerArrow.svg';
import styles from './Layout.scss';

const Layout = () => {
  const [activeSocialButton, setIsActiveSocialButton] = useState(false);

  const classNameFooterButton = cx(styles.footerSocialButton, {
    [styles.active]: activeSocialButton,
  });

  return (
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
        <Accordion title="dasdas">
          dasdasda
        </Accordion>
        <Accordion title="dasds">
          asdas
        </Accordion>
        <Accordion title="daas">
          asdas
        </Accordion>
      </main>
      <footer className={styles.footer}>
        <Button
          type="button"
          onClick={() => setIsActiveSocialButton(!activeSocialButton)}
          classNameWrapper={styles.footerButton}
        >
          <span className={cx({ [styles.activeSocial]: activeSocialButton })}>
            Связать с менеджером <IconFooterArrow className={styles.footerIcon} />
          </span>
          <a href="/" className={classNameFooterButton}>
            <IconFooterFacebook />
          </a>
          <a href="/" className={classNameFooterButton}>
            <IconFooterTelegram />
          </a>
          <a href="/" className={classNameFooterButton}>
            <IconFooterEmail />
          </a>
        </Button>
      </footer>
    </>
  );
};

export default Layout;
