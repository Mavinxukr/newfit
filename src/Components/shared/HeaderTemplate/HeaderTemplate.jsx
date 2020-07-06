import React from 'react';
import IconLogo from '../../../static/svg/EF.svg';
import withPopup from '../../../HOC/withPopup';
import PopupAuth from '../../Tamplate/PopupAuth/PopupAuth';
import styles from './HeaderTemplate.scss';

const HeaderTemplate = ({ openPopup }) => (
  <div className={styles.wrapperHeader}>
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <IconLogo />
        <div className={styles.linksGroup}>
          <button
            className={styles.linkEntry}
            type="button"
            onClick={() => openPopup({
              PopupContentComponent: PopupAuth,
            })}
          >Войти
          </button>
          <a className={styles.linkHistory} href="/">История оплат</a>
        </div>
      </div>
    </header>
  </div>
);

export default withPopup(HeaderTemplate);
