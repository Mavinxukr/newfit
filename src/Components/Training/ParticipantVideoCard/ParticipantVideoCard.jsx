import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FinishPopup from '../FinishPopup/FinishPopup';
import IconCamera from '../../../static/svg/video-camera.svg';
import IconMic from '../../../static/svg/mic.svg';
import styles from './ParticipantVideoCard.scss';

const ParticipantVideoCard = ({
  item, classNameWrapper, text, openPopup,
}) => {
  const classNameForButton = cx(styles.button, {
    [styles.buttonUnactive]: !item.isActiveSignal,
  });

  const classNameForIcon = cx(styles.icon, {
    [styles.iconNoActive]: !item.isActiveSignal,
  });

  return (
    <div className={cx(styles.wrapper, classNameWrapper)}>
      {text && (
        <div className={styles.wrapperText}>
          <p className={styles.cameraTextTraining}>{text}</p>
          <button
            type="button"
            onClick={() => {
              openPopup({
                PopupContentComponent: FinishPopup,
              });
            }}
            className={styles.buttonFinish}
          >
            Закончить
          </button>
        </div>
      )}
      <div className={styles.controlPanel}>
        <div className={styles.buttonControl}>
          <button type="button" className={classNameForButton}>
            <IconCamera className={classNameForIcon} />
          </button>
          <button type="button" className={classNameForButton}>
            <IconMic className={classNameForIcon} />
          </button>
        </div>
        <div className={styles.name}>
          Инна
          <button type="button" className={styles.buttonExit}>x</button>
        </div>
      </div>
    </div>
  );
};

ParticipantVideoCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    isActiveSignal: PropTypes.bool,
  }),
  text: PropTypes.string,
  classNameWrapper: PropTypes.string,
  openPopup: PropTypes.func,
};

export default ParticipantVideoCard;
