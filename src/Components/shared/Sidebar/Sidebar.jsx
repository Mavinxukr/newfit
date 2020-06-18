import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../../UI-Kit/Button/Button';
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
          <li className={styles.menuLink}>
            <a href="/">Групповой Live</a>
          </li>
          <li className={styles.menuLinkNoActive}>
            <a href="/" className={styles.noActiveLink}>Профиль</a>
          </li>
          <li className={cx(styles.menuLink, styles.activeLink)}>
            <a href="/">Финансы</a>
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
