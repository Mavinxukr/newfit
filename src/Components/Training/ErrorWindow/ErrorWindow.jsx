import React from 'react';
import Button from '../../../UI-Kit/Button/Button';
import IconCamera from '../../../static/svg/video-camera.svg';
import IconMic from '../../../static/svg/mic.svg';
import styles from './ErrorWindow.scss';

const ErrorWindow = () => (
  <div className={styles.wrapper}>
    <h6 className={styles.title}>Ваша камера и микрофон отключены</h6>
    <p className={styles.tooltip}>Если браузер не запросил доступ</p>
    <Button
      viewType="small"
      classNameWrapper={styles.buttonAccess}
    >
      Запросить разращение
    </Button>
    <hr className={styles.line} />
    <div className={styles.buttons}>
      <Button
        type="button"
        classNameWrapper={styles.buttonIndicator}
        viewType="indicator"
      >
        <IconCamera className={styles.iconError} />
      </Button>
      <Button
        type="button"
        classNameWrapper={styles.buttonIndicator}
        viewType="indicator"
      >
        <IconMic className={styles.iconError} />
      </Button>
    </div>
  </div>
);

export default ErrorWindow;
