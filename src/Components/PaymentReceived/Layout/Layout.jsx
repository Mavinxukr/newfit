import React from 'react';
import TemplateWrapper from '../../shared/TemplateWrapper/TemplateWrapper';
import Button from '../../../UI-Kit/Button/Button';
import FacebookButton from '../../../UI-Kit/FacebookButton/FacebookButton';
import GoogleButton from '../../../UI-Kit/GoogleButton/GoogleButton';
import FAQ from '../../shared/FAQ/FAQ';
import IconLink from '../../../static/svg/Group2331.svg';
import styles from './Layout.scss';

const Layout = () => (
  <TemplateWrapper>
    <div className={styles.content}>
      <section className={styles.mainInfoSection}>
        <div className={styles.infoPayment}>
          <h2 className={styles.infoPaymentTitle}>Ура! Вы успешно оплатили</h2>
          <p className={styles.infoPaymentText}>Занятие будет проходить на другом сервисе, вот ссылка для участия</p>
          <Button
            href
            classNameWrapper={styles.infoPaymentButton}
            viewType="linkOccupation"
          >
            https://us04web.zoom.us/j/79060883756?pwd
            <IconLink className={styles.iconLink} />
          </Button>
        </div>
        <div className={styles.authBlock}>
          <h2 className={styles.authBlockTitle}>Создайте аккаунт, чтобы <br /> не потерять данные о покупке</h2>
          <div className={styles.authBlockButtons}>
            <FacebookButton />
            <GoogleButton classNameWrapper={styles.googleButtonWrapper} />
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  </TemplateWrapper>
);

export default Layout;
