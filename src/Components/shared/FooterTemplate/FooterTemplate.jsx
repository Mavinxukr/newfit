import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterTemplate.scss';
import IconFacebook from '../../../static/svg/facebook1.svg';
import IconTelegram from '../../../static/svg/telegram1.svg';
import IconLink from '../../../static/svg/Group2331.svg';

const FooterTemplate = () => (
  <footer className={styles.footer}>
    <a href="/" className={styles.linkMain}>
      Сайт <IconLink />
    </a>
    <div className={styles.info}>
      <p className={styles.infoText}>Трудности с оплатой? Онлайн-поддержка</p>
      <Link to="/" className={styles.socialLink}>
        <IconFacebook />
      </Link>
      <Link to="/" className={styles.socialLink}>
        <IconTelegram />
      </Link>
    </div>
  </footer>
);

export default FooterTemplate;
