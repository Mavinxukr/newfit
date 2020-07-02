import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';
import IconThumb from '../../static/svg/Group319.svg';
import styles from './Slider.scss';

const Slider = ({ defaultValue, classNameWrapper, setCountParticipant }) => (
  <ReactSlider
    className={cx(styles.wrapper, classNameWrapper)}
    defaultValue={defaultValue}
    step={5}
    onChange={(value) => setCountParticipant(value)}
    renderThumb={(props) => (
      <button type="button" {...props}> {/*eslint-disable-line*/}
        <IconThumb className={styles.thumbIcon} />
      </button>
    )}
    thumbClassName={styles.thumb}
    renderTrack={(props, state) => (
      <div
          {...props} /*eslint-disable-line*/
        style={{
            ...props.style, /*eslint-disable-line*/
          background: state.index === 1 && '#f2f2f2' || '#56af69',
          height: '6px',
          borderRadius: '50px',
        }}
      />
    )}
    min={30}
    max={105}
    withTracks
  />
);

Slider.propTypes = {
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  classNameWrapper: PropTypes.string,
  setCountParticipant: PropTypes.func,
};

export default Slider;
