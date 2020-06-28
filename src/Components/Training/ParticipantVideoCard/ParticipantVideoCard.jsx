import React from 'react';
import IconCamera from '../../../static/svg/video-camera.svg';
import IconMic from '../../../static/svg/mic.svg';
import styles from './ParticipantVideoCard.scss';

const ParticipantVideoCard = () => (
  <div className={styles.wrapper}>
    <div className={styles.controlPanel}>
      <div className={styles.buttonControl}>
        <button type="button">
          <IconCamera />
        </button>
        <button type="button">
          <IconMic />
        </button>
      </div>
      <div
        className={styles.}
      >
        Инна
        <span>x</span>
      </div>
    </div>
  </div>
);

export default ParticipantVideoCard;
