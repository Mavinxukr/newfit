import React from 'react';
import PropTypes from 'prop-types';
import withPopup from '../../../HOC/withPopup';
import Button from '../../../UI-Kit/Button/Button';
import FinishPopup from '../FinishPopup/FinishPopup';
import Questions from '../Questions/Questions';
import BroadcastCards from '../BroadcastCards/BroadcastCards';
import IconCopy from '../../../static/svg/copyGrey.svg';
import styles from './Layout.scss';

const questions = [
  {
    id: 1,
    name: 'Инна',
    question: 'Можешь проверить мою технику?',
  },
  {
    id: 2,
    name: 'Итан',
    question: 'У меня не плохо получается, давай на моем примере?',
  },
  {
    id: 3,
    name: 'Никита',
    question: 'Добавь меня в эфир',
  },
];

const cards = [
  {
    title: '',
    blocks: [
      {
        id: 1,
        name: 'Den',
        question: 'why?',
        image: true,
      },
      {
        id: 2,
        name: 'Kirill',
        question: 'GO?',
        image: true,
      },
      {
        id: 3,
        name: 'Vadym',
        question: 'True?',
        image: false,
      },
    ],
  },
];

const cardsActive = [
  {
    title: 'Включённые камеры',
    blocks: [
      {
        id: 1,
        name: 'Den',
        image: true,
      },
      {
        id: 2,
        name: 'Kirill',
        image: true,
      },
      {
        id: 3,
        name: 'Vadym',
        image: true,
      },
      {
        id: 4,
        name: 'Vadym',
        image: true,
      },
      {
        id: 5,
        name: 'Vadym',
        image: true,
      },
    ],
  },
];

const Layout = ({ openPopup }) => (
  <div className={styles.wrapperTraining}>
    <div className={styles.leftTraining}>
      <div className={styles.bgColor}>
        <p className={styles.sizeGroup}>
          23
          <span className={styles.maxSize}> /25</span>
        </p>
        <Button viewType="link">
          <IconCopy className={styles.icon} />
          Ссылка
        </Button>
      </div>
      <Questions data={questions} />
    </div>
    <div className={styles.rightTraining}>
      <BroadcastCards data={cards} />
      <BroadcastCards data={cardsActive} />
    </div>
    <button
      type="button"
      className={styles.finished}
      onClick={() => {
        openPopup({
          PopupContentComponent: FinishPopup,
        });
      }}
    >
      Закончить
    </button>
  </div>
);

Layout.propTypes = {
  openPopup: PropTypes.func,
};

export default withPopup(Layout);
