import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../../../UI-Kit/Button/Button';
import PricingNav from '../../shared/PricingNav/PricingNav';
import Select from '../../../UI-Kit/Select/Select';
import IconLogo from '../../../static/svg/EF.svg';
import IconFacebook from '../../../static/svg/facebook1.svg';
import IconTelegram from '../../../static/svg/telegram1.svg';
import IconEmail from '../../../static/svg/email1.svg';
import IconFooterFacebook from '../../../static/svg/facebook.svg';
import IconFooterTelegram from '../../../static/svg/telegram.svg';
import IconFooterEmail from '../../../static/svg/email.svg';
import IconFooterArrow from '../../../static/svg/footerArrow.svg';
import IconExit from '../../../static/svg/Group150.svg';
import styles from './Layout.scss';

const arrOptionsTimes = [
  { value: '2ч 30м', label: '2ч 30м' },
  { value: '3ч', label: '3ч' },
  { value: '3ч 30м', label: '3ч 30м' },
  { value: '4ч', label: '4ч' },
  { value: '4ч 30м', label: '4ч 30м' },
  { value: '5ч', label: '5ч' },
  { value: '5ч 30м', label: '5ч 30м' },
  { value: '6ч', label: '6ч' },
  { value: '7ч 30м', label: '7ч 30м' },
  { value: '7ч', label: '7ч' },
  { value: '8ч 30м', label: '8ч 30м' },
  { value: '8ч', label: '8ч' },
];

const Layout = () => {
  const [activeSocialButton, setIsActiveSocialButton] = useState(false);
  const [valueSelect, setValueSelect] = useState(null);

  const classNameFooterButton = cx(styles.footerSocialButton, {
    [styles.active]: activeSocialButton,
  });

  return (
    <>
      <div className={styles.headerWrapper}>
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
      </div>
      <main className={styles.content}>
        <Link to="/" className={styles.buttonExit}>
          <IconExit />
        </Link>
        <PricingNav />
        <p className={styles.descLive}>
          Проводите платные групповые занятия и марафоны,
          в удобном интерфейсе для себя и клиентов, планируйте,
          создавайте промо-сайты и фиксируйте доход для более
          эффективной работы
        </p>
        <Select
          options={arrOptionsTimes}
          setValue={setValueSelect}
          value={valueSelect}
          defaultValue={{ value: 'до 2ч занятие', label: 'до 2ч занятие' }}
          classNameWrapper={styles.selectWrapper}
        />
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
