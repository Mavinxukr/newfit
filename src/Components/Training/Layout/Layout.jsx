import React from 'react';
import Button from '../../../UI-Kit/Button/Button';
import Questions from '../Questions/Questions';
import BroadcastCard from '../BroadcastCard/BroadcastCard';
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

const Layout = () => (
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
    <BroadcastCard image="https://i.ytimg.com/vi/EYZM94u-5GY/0.jpg" />
    <BroadcastCard image="https://i.ytimg.com/vi/EYZM94u-5GY/0.jpg" />
    <BroadcastCard />
  </div>
);

export default Layout;
