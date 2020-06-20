import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';
import IconThumb from '../../static/svg/Group2840.svg';
import styles from './Slider.scss';

const Slider = ({ defaultValue, classNameWrapper, setCountParticipant }) => (
  <ReactSlider
    className={cx(styles.wrapper, classNameWrapper)}
    defaultValue={defaultValue}
    step={1}
    onChange={(value) => setCountParticipant(value)}
    renderThumb={(props) => (
      <button type="button" {...props}> {/*eslint-disable-line*/}
        <IconThumb />
      </button>
    )}
    thumbClassName={styles.thumb}
    trackClassName={styles.track}
    min={1}
    max={100}
  />
);

Slider.propTypes = {
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  classNameWrapper: PropTypes.string,
  setCountParticipant: PropTypes.func,
};

export default Slider;
