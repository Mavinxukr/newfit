import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withPopup from '../../../HOC/withPopup';
import Button from '../../../UI-Kit/Button/Button';
import FinishPopup from '../FinishPopup/FinishPopup';
import Questions from '../Questions/Questions';
import Translation from '../../shared/Translation/Translation';
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

const Layout = ({ openPopup }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className={styles.wrapperTraining}>
      <div className={styles.leftTraining}>
        <div className={styles.bgColor}>
          <p className={styles.sizeGroup}>
            23
            <span className={styles.maxSize}> /25</span>
          </p>
          <Button viewType="link" classNameWrapper={styles.buttonLink}>
            <IconCopy className={styles.icon} />
            Ссылка
          </Button>
        </div>
        <Questions
          data={questions}
          setSelectedQuestion={setSelectedQuestion}
          selectedQuestion={selectedQuestion}
        />
      </div>
      <div className={styles.translationWrapper}>
        <Translation isTrainingPage count={2} text={selectedQuestion} isError />
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
};

Layout.propTypes = {
  openPopup: PropTypes.func,
};

export default withPopup(Layout);
