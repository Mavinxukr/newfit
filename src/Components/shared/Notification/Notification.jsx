import React from 'react';
import { useSelector } from 'react-redux';
import { contentNotification } from '../../../selectors';
import styles from './Notification.scss';

const Notification = () => {
  const content = useSelector(contentNotification);

  return (
    <div className={styles.container}>
      {content}
    </div>
  );
};

export default Notification;
