import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../../UI-Kit/Button/Button';
import WaitingTooltip from '../../GroupLiveWaiting/WaitingTooltip/WaitingTooltip';
import IconCamera from '../../../static/svg/video-camera.svg';
import IconMic from '../../../static/svg/mic.svg';
import withPopup from '../../../HOC/withPopup';
import styles from './Translation.scss';

const Translation = ({ classNameWrapper, isError, openPopup }) => (
  <div className={cx(styles.camera, classNameWrapper)}>
    <div className={cx(styles.cameraVideoBlock, {
      [styles.cameraVideoBlockGrey]: isError,
      [styles.cameraVideoBlockImage]: !isError,
    })}
    >
      {isError && (
        <div className={styles.errorWrapper}>
          <div className={styles.errorInfo}>
            <p className={styles.errorInfoText}>Ваша камера и микрофон отключены</p>
            <p className={styles.errorInfoTextTooltip}>Если браузер не запросил доступ</p>
            <Button
              type="button"
              viewType="small"
              classNameWrapper={styles.buttonAccess}
            >
              Запросить разращение
            </Button>
          </div>
          <div className={styles.errorTooltip}>
            <p className={styles.errorTooltipText}>Показать как дать доступ, если вы заблокировали его</p>
            <Button
              type="button"
              viewType="link"
              classNameWrapper={styles.errorTooltipButton}
              onClick={() => {
                openPopup({
                  PopupContentComponent: WaitingTooltip,
                });
              }}
            >
              Подсказка
            </Button>
          </div>
        </div>
      ) || (
        <p className={styles.cameraText}>Ваша камера</p>
      )}
    </div>
    <div className={styles.controlPanel}>
      <div className={styles.connectionQuality}>
        <p className={styles.connectionQualityDots}>
          <span className={cx(styles.connectionQualityDot, styles.connectionQualityDotActive)} />
          <span className={styles.connectionQualityDot} />
          <span className={styles.connectionQualityDot} />
        </p>
        <p className={styles.connectionQualityText}>Уровень связи</p>
      </div>
      <button
        type="button"
        className={styles.button}
      >
        <IconCamera />
      </button>
      <button
        type="button"
        className={styles.button}
      >
        <IconMic />
      </button>
    </div>
  </div>
);

Translation.propTypes = {
  classNameWrapper: PropTypes.string,
  isError: PropTypes.bool,
  openPopup: PropTypes.func,
};

export default withPopup(Translation);
