import React from 'react';
import Layout from '../../Components/Finance/Layout/Layout';
import Header from '../../Components/shared/Header/Header';
import Sidebar from '../../Components/shared/Sidebar/Sidebar';
import styles from './Finance.scss';

const Finance = () => (
  <>
    <Header />
    <div className={styles.contentWrapper}>
      <Sidebar />
      <Layout />
    </div>
  </>
);

export default Finance;
