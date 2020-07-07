import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Button from '../../../UI-Kit/Button/Button';
import PricingNav from '../../shared/PricingNav/PricingNav';
import Select from '../../../UI-Kit/Select/Select';
import Card from '../Card/Card';
import Curses from '../Curses/Curses';
import Tabs from '../../../UI-Kit/Tabs/Tabs';
import SocialLinks from '../../shared/SocialLinks/SocialLinks';
import { setTabIndex } from '../../../actions/pricingTab';
import IconLogo from '../../../static/svg/EF.svg';
import IconFooterFacebook from '../../../static/svg/facebook.svg';
import IconFooterTelegram from '../../../static/svg/telegram.svg';
import IconFooterEmail from '../../../static/svg/email.svg';
import IconFooterArrow from '../../../static/svg/footerArrow.svg';
import IconExit from '../../../static/svg/Group66.svg';
import imageCardOne from '../../../static/images/01.png';
import imageCardTwo from '../../../static/images/02.png';
import imageCardThree from '../../../static/images/03.png';
import IconLink from '../../../static/svg/Group2072.svg';
import { curses, cursesTwo } from '../data';
import styles from './Layout.scss';

configureAnchors({ offset: -100, scrollDuration: 400 });

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

const cursesData = [curses, cursesTwo, curses];

const tabs = ['Групповое занятие', 'Промо-сайт занятия', 'Финансы'];

const arrButtons = ['1 Месяц', '2 Месяца -3%', '3 Месяца -5%'];

const Layout = () => {
  const [activeSocialButton, setIsActiveSocialButton] = useState(false);
  const [valueSelect, setValueSelect] = useState(null);
  const [countParticipant, setCountParticipant] = useState(35);
  const [indexButton, setIndexButton] = useState(1);

  const indexTab = useSelector((state) => state.pricingTab.index);

  const dispatch = useDispatch();

  const classNameFooterButton = cx(styles.footerSocialButton, {
    [styles.active]: activeSocialButton,
  });

  return (
    <div className={styles.wrapperPricing}>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <Link to="/">
            <IconLogo />
            <span className={styles.logoText}>Тренер</span>
          </Link>
          <div className={styles.nav}>
            <a className={styles.headerLink} href="#subscriptions">Подписки</a>
            <a className={styles.headerLink} href="#opportunities">Возможности</a>
          </div>
          <div className={styles.headerSocial}>
            <p className={styles.socialText}>Онлайн-чат с нами</p>
            <SocialLinks classNameWrapper={styles.links} />
          </div>
        </header>
      </div>
      <Link to="/" className={styles.buttonExit}>
        <IconExit className={styles.iconExit} />
      </Link>
      <main className={styles.content}>
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
          defaultValue={{ value: '2ч', label: '2ч' }}
          classNameWrapper={styles.selectWrapper}
        />
        <hr className={styles.line} />
        <ScrollableAnchor id="subscriptions">
          <div className={styles.selectPlanWrapper}>
            {arrButtons.map((item, index) => (
              <button
                type="button"
                key={index}
                className={cx(styles.buttonSelectPlan, {
                  [styles.buttonSelectPlanActive]: indexButton === index,
                })}
                onClick={() => setIndexButton(index)}
              >{item}
              </button>
            ))}
          </div>
        </ScrollableAnchor>
        <div className={styles.cardsWrapper}>
          <Card
            classNameWrapper={styles.smallCard}
            discount={3}
            countParticipant={10}
            price={4.5}
            imageSrc={imageCardOne}
          />
          <Card
            classNameWrapper={cx(styles.smallCard, styles.smallCardActive)}
            discount={3}
            countParticipant={25}
            price={8}
            imageSrc={imageCardTwo}
          />
          <Card
            classNameWrapper={styles.bigCard}
            discount={3}
            countParticipant={countParticipant}
            price={countParticipant * 2}
            setCountParticipant={setCountParticipant}
            imageSrc={imageCardThree}
            isBigCard
          />
        </div>
        <hr className={styles.lineTwo} />
        <ScrollableAnchor id="opportunities">
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Основные возможности групповых тренировок на EasyFit</h1>
            <a href="/" className={styles.linkToOpportunities}>
              <span className={styles.count}>34</span>
              Все возможности
              <IconLink className={styles.linkIcon} />
            </a>
          </div>
        </ScrollableAnchor>
        <Tabs
          classNameWrapper={styles.tabsWrapper}
          onChange={(i) => dispatch(setTabIndex(i))}
          activeTab={indexTab}
          tabs={tabs}
        />
        <Curses data={cursesData[indexTab]} />
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
    </div>
  );
};

export default Layout;
