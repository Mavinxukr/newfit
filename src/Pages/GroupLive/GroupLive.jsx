import React from 'react';
import Layout from '../../Components/Lead/Layout/Layout';
import Header from '../../Components/shared/Header/Header';
import Sidebar from '../../Components/shared/Sidebar/Sidebar';
import styles from './GroupLive.scss';

const GroupLive = () => (
  <>
    <Header />
    <div className={styles.contentWrapper}>
      <Sidebar />
      <Layout />
    </div>
  </>
);

export default GroupLive;
