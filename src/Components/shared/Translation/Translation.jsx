import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../../UI-Kit/Button/Button';
import WaitingTooltip from '../../GroupLiveWaiting/WaitingTooltip/WaitingTooltip';
import IconArrow from '../../../static/svg/Group2072.svg';
import IconCamera from '../../../static/svg/video-camera.svg';
import IconMic from '../../../static/svg/mic.svg';
import IconExpandArrows from '../../../static/svg/expad-arrows.svg';
import withPopup from '../../../HOC/withPopup';
import styles from './Translation.scss';

const Translation = ({
  classNameWrapper, isError, openPopup, isTrainingPage, text,
}) => (
  <div className={cx(styles.camera, classNameWrapper)}>
    <div className={cx(styles.cameraVideoBlock, {
      [styles.cameraVideoBlockGrey]: isError,
      [styles.cameraVideoBlockImage]: !isError,
    })}
    >
      {isTrainingPage && (
        <button type="button" className={styles.buttonExpand}>
          <IconExpandArrows className={styles.expandsIcon} />
        </button>
      )}
      {isError && !isTrainingPage && (
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
        <p className={styles.cameraText}>{text}</p>
      )}
    </div>
    <div className={styles.controlPanel}>
      {isTrainingPage && (
        <>
          <p className={styles.timeIndicator}>59м</p>
          <Button
            type="button"
            viewType="simple"
            classNameWrapper={styles.buttonSlider}
          >
            <p className={styles.buttonSliderContent}>
              Учасники
              <IconArrow className={styles.iconArrow} />
            </p>
          </Button>
        </>
      )}
      <div className={styles.controlPanelIndicators}>
        <div className={styles.connectionQuality}>
          <p className={styles.connectionQualityDots}>
            <span className={cx(styles.connectionQualityDot, styles.connectionQualityDotActive)} />
            <span className={styles.connectionQualityDot} />
            <span className={styles.connectionQualityDot} />
          </p>
          <p className={styles.connectionQualityText}>Уровень связи</p>
        </div>
        <Button
          type="button"
          classNameWrapper={styles.button}
          viewType="indicator"
        >
          <IconCamera className={styles.iconCamera} />
        </Button>
        <Button
          type="button"
          classNameWrapper={styles.button}
          viewType="indicator"
        >
          <IconMic className={styles.iconCamera} />
        </Button>
      </div>
    </div>
  </div>
);

Translation.propTypes = {
  classNameWrapper: PropTypes.string,
  isError: PropTypes.bool,
  isTrainingPage: PropTypes.bool,
  openPopup: PropTypes.func,
  text: PropTypes.string,
};

export default withPopup(Translation);
