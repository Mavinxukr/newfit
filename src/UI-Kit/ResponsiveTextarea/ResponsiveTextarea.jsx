import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ResponsiveTextarea.scss';

const ResponsiveTextarea = ({ setText, text }) => {
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState('24px');
  const [parentHeight, setParentHeight] = useState('24px');

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
  }, [text]);

  const onChangeHandler = (event) => {
    setText(event.target.value.trimStart());
    setTextAreaHeight('auto');
    setParentHeight(`${textAreaRef.current.scrollHeight}px`);
  };

  return (
    <div
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        ref={textAreaRef}
        rows={1}
        style={{
          height: textAreaHeight,
        }}
        value={text}
        className={styles.input}
        onChange={onChangeHandler}
        maxLength={150}
        placeholder="Название"
      />
    </div>
  );
};

ResponsiveTextarea.propTypes = {
  setText: PropTypes.func,
  text: PropTypes.string,
};

export default ResponsiveTextarea;
