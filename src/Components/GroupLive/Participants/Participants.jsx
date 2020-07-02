import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SimpleCopy from '../../../UI-Kit/SimpleCopy/SimpleCopy';
import IconCopy from '../../../static/svg/copy1.svg';
import IconExit from '../../../static/svg/close.svg';
import styles from './Participants.scss';

const Participants = ({ closePopup, content }) => (
  <div className={styles.wrapper}>
    <div className={styles.headerParticipants}>
      <h4>Участники <span className={styles.num}>23</span></h4>
      <SimpleCopy classNameWrapper={styles.btnCopy}><IconCopy className={styles.icon} />Копировать</SimpleCopy>
      <button
        type="button"
        onClick={closePopup}
      >
        <IconExit />
      </button>
    </div>
    <div className={styles.mainContent}>
      <div className={styles.participantsContent}>
        <p className={cx(styles.name, styles.opacityText)}>Имя</p>
        <p className={cx(styles.mail, styles.opacityText)}>E-mail</p>
        <p className={cx(styles.sale, styles.opacityText)}>Скидка</p>
        <p className={cx(styles.date, styles.opacityText)}>Дата</p>
      </div>
      {content && content.map((item) => (
        <div key={item.id} className={styles.participantsContent}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.mail}>{item.email}</p>
          <p className={styles.sale}>{item.sale}</p>
          <p className={styles.date}>{item.date}</p>
        </div>
      ))}
    </div>
  </div>
);

Participants.propTypes = {
  closePopup: PropTypes.func,
  content: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    sale: PropTypes.string,
    date: PropTypes.string,
  })),
};

export default Participants;
