import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../../../UI-Kit/Button/Button';
import styles from './Sidebar.scss';

const Sidebar = ({ image }) => (
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
              to="/group-live"
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
              to="/"
            >
              Финансы
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button classNameWrapper={styles.buttonSticky} viewType="grey" type="button">
        Онлайн поддержка
      </Button>
    </div>
  </div>
);

Sidebar.propsTypes = {
  image: PropTypes.string,
};

export default Sidebar;
