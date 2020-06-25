import React from 'react';
import IconLogo from '../../../static/svg/EF.svg';
import Button from '../../../UI-Kit/Button/Button';
import IconCopy from '../../../static/svg/copy1.svg';
import styles from './Layout.scss';

const Layout = () => (
  <div>
    <div className={styles.container}>
      <IconLogo className={styles.iconLogo} />
      <div className={styles.wrapperContent}>
        <div className={styles.textContent}>
          <p className={styles.amountParticipants}>
            44 <span className={styles.amountParticipantsGrey}>/55</span>
          </p>
          <p className={styles.question}>Нужно больше участников / время?</p>
          <ul className={styles.infoList}>
            <li className={styles.infoListItem}>
              <p className={styles.titleInfoList}>Запланировано на 14:30</p>
            </li>
            <li className={styles.infoListItem}>
              <p className={styles.titleInfoList}>Пригласить</p>
              <Button
                type="button"
                viewType="small"
                classNameWrapper={styles.copyButton}
              >
                <IconCopy className={styles.iconCopy} />
                Копировать ссылку
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer className={styles.footer}>
      <Button
        href="/"
        viewType="green"
        classNameWrapper={styles.buttonStart}
      >
        начать занятие
      </Button>
    </footer>
  </div>
);

export default Layout;
