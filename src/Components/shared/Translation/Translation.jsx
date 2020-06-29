import React, { useEffect } from 'react';
import cx from 'classnames';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Button from '../../../UI-Kit/Button/Button';
import WaitingTooltip from '../../GroupLiveWaiting/WaitingTooltip/WaitingTooltip';
import BroadcastCards from '../../Training/BroadcastCards/BroadcastCards';
import ErrorWindow from '../../Training/ErrorWindow/ErrorWindow';
import ParticipantVideoCard from '../../Training/ParticipantVideoCard/ParticipantVideoCard';
import IconArrow from '../../../static/svg/Group2072.svg';
import IconCamera from '../../../static/svg/video-camera.svg';
import IconComment from '../../../static/svg/comment.svg';
import IconMic from '../../../static/svg/mic.svg';
import IconExpandArrows from '../../../static/svg/expad-arrows.svg';
import withPopup from '../../../HOC/withPopup';
import styles from './Translation.scss';
import { cards, cardsActive, cameras } from './data';

const SliderButton = ({ onClick, className, currentSlide }) => {
  const isSecondSlide = currentSlide === 1;

  return (
    <Button
      type="button"
      viewType="simple"
      onClick={onClick}
      classNameWrapper={cx(styles.buttonSlider, {
        [styles.buttonSliderActive]: className.indexOf('slick-disabled') === -1,
      })}
    >
      <p className={cx(styles.buttonSliderContent, {
        [styles.buttonSliderContentActive]: isSecondSlide,
      })}
      >
        {isSecondSlide && 'Главный экран' || 'Учасники'}
        <IconArrow className={cx(styles.iconArrow, {
          [styles.iconArrowActive]: isSecondSlide,
        })}
        />
      </p>
    </Button>
  );
};

const sliderSetting = {
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SliderButton />,
  prevArrow: <SliderButton />,
};

const VideoBlock = ({
  isError, isTrainingPage, openPopup, text, setText,
}) => (
  <div className={cx(styles.cameraVideoBlock, {
    [styles.cameraVideoBlockGrey]: isError,
    [styles.cameraVideoBlockImage]: !isError,
    [styles.cameraVideoBlockTraining]: isTrainingPage,
  })}
  >
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
    )}
    {text && !isTrainingPage && !isError && (
      <p className={styles.cameraText}>{text}</p>
    ) || text && isTrainingPage && (
      <div className={styles.wrapperText}>
        <p className={styles.cameraTextTraining}>{text.question}</p>
        <p className={styles.nameText}>Инна</p>
        <button
          type="button"
          onClick={() => setText(null)}
          className={styles.buttonFinish}
        >
          Закончить
        </button>
      </div>
    )}
  </div>
);

const Translation = ({
  classNameWrapper, isError, openPopup, isTrainingPage, text, count, setText,
}) => {
  useEffect(() => {
    if (isTrainingPage) {
      const buttonSlider = document.querySelector('.slick-list');
      const sliderTrack = document.querySelector('.slick-track');
      buttonSlider.classList.add(styles.sliderList);
      sliderTrack.classList.add(styles.sliderTrack);
    }
  }, []);

  return (
    <div className={cx(styles.camera, classNameWrapper)}>
      {isTrainingPage && (
        <button type="button" className={styles.buttonExpand}>
          <IconExpandArrows className={styles.expandsIcon} />
        </button>
      )}
      {!isTrainingPage && (
        <VideoBlock
          openPopup={openPopup}
          isTrainingPage={isTrainingPage}
          text={text}
          isError={isError}
          setText={setText}
        />
      ) || (
        <div className={styles.sliderWrapper}>
          <Slider {...sliderSetting}> {/*eslint-disable-line*/}
            {cameras.length && (
              <div className={styles.camerasWrapper}>
                <div className={styles.cameras}>
                  <VideoBlock
                    openPopup={openPopup}
                    isTrainingPage={isTrainingPage}
                    text={text}
                    isError={isError}
                    setText={setText}
                  />
                  {cameras.map((item) => (
                    <ParticipantVideoCard
                      text="позанимаемся"
                      key={item.id}
                      item={item}
                      openPopup={openPopup}
                    />
                  ))}
                </div>
              </div>
            ) || (
            <VideoBlock
              openPopup={openPopup}
              isTrainingPage={isTrainingPage}
              text={text}
              isError={isError}
              setText={setText}
            />
            )}
            <div className={styles.broadcastCardsWrapper}>
              <BroadcastCards data={cards} />
              <BroadcastCards data={cardsActive} />
            </div>
          </Slider>
        </div>
      )}
      {isError && isTrainingPage && <ErrorWindow />}
      <div className={cx(styles.controlPanel, {
        [styles.controlPanelWaiting]: !isTrainingPage,
      })}
      >
        {isTrainingPage && count && (
          <div className={styles.countOfParticipant}>
            <p className={styles.countComments}>
              <IconComment className={styles.iconCountComment} /> 3
            </p>
            <p className={styles.countCameras}>
              <IconCamera className={styles.iconCountCamera} /> 8
            </p>
          </div>
        )}
        {isTrainingPage && (
          <p className={styles.timeIndicator}>59м</p>
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
};

Translation.propTypes = {
  classNameWrapper: PropTypes.string,
  isError: PropTypes.bool,
  isTrainingPage: PropTypes.bool,
  openPopup: PropTypes.func,
  setText: PropTypes.func,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  count: PropTypes.number,
};

export default withPopup(Translation);
