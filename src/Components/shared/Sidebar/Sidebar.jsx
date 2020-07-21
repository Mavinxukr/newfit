import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../../../UI-Kit/Button/Button';
import SocialLinks from '../SocialLinks/SocialLinks';
import IconClose from '../../../static/svg/Group1508.svg';
import styles from './Sidebar.scss';

const Sidebar = ({ image }) => {
  const [isOpenSocialLinks, setIsOpenSocialLinks] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.avatarBlock}>
          {image ? (
            <img src={image} alt="" />
          ) : (
            <span className={styles.noAvatar}>ed</span>
          )}
        </div>
        <h5>Emma Deyla</h5>
        <a href="mailto:ethan@minomo.studio" className={styles.mailLink}>
          ethan@minomo.studio
        </a>
        <nav className={styles.menu}>
          <ul className={styles.menuLinks}>
            <li>
              <NavLink
                className={styles.menuLink}
                exact
                activeClassName={styles.activeLink}
                to="/"
              >
                Групповой Live
              </NavLink>
            </li>
            <li>
              <NavLink
                className={cx(styles.menuLink, styles.noActiveLink)}
                exact
                activeClassName={styles.activeLink}
                to="/profile"
              >
                Профиль
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.menuLink}
                exact
                activeClassName={styles.activeLink}
                to="/finance"
              >
                Финансы
              </NavLink>
            </li>
          </ul>
        </nav>
        {isOpenSocialLinks && <SocialLinks classNameWrapper={styles.socialLinks} />}
        <Button
          classNameWrapper={cx(styles.buttonSticky, {
            [styles.buttonStickyActive]: isOpenSocialLinks,
          })}
          viewType="grey"
          type="button"
          onClick={() => setIsOpenSocialLinks(!isOpenSocialLinks)}
        >
          {isOpenSocialLinks && <IconClose className={styles.iconClose} /> || 'Онлайн поддержка'}
        </Button>
      </div>
    </div>
  );
};

Sidebar.propsTypes = {
  image: PropTypes.string,
};

export default Sidebar;
