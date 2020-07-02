import React from 'react';
import cx from 'classnames';
import { useLocation, Link } from 'react-router-dom';
import styles from './PricingNav.scss';

const arrLinks = [
  {
    title: 'Групповые Live',
    href: '/pricing',
    isSoon: false,
  },
  {
    title: 'Персональные тренировки',
    href: '/',
    isSoon: true,
  },
  {
    title: 'Курсы',
    href: '/',
    isSoon: true,
  },
];

const PricingNav = () => {
  const router = useLocation();

  return (
    <div className={styles.navWrapper}>
      {arrLinks.map((item, index) => {
        const classNameForLink = cx(styles.navLink, {
          [styles.navLinkActive]: router.pathname === item.href,
          [styles.navLinkSoon]: item.isSoon,
        });

        return (
          <div key={item.title}>
            <Link to={item.href} className={classNameForLink}>
              {item.isSoon && <span className={styles.soon}>Скоро</span>}
              {item.title}
            </Link>
            {index !== arrLinks.length - 1 && (
              <span className={styles.line}>/</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PricingNav;
