import React from 'react';
import Button from '../../../UI-Kit/Button/Button';
import IconCameraError from '../../../static/svg/Group3255.svg';
import IconMicError from '../../../static/svg/Group3257.svg';
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
        <IconCameraError />
      </Button>
      <Button
        type="button"
        classNameWrapper={styles.buttonIndicator}
        viewType="indicator"
      >
        <IconMicError />
      </Button>
    </div>
  </div>
);

export default ErrorWindow;
