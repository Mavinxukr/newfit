import React from 'react';
// import EntryForm from '../../Components/Main/EntryForm/EntryForm';
import Layout from '../../Components/Finance/Layout/Layout';
import Header from '../../Components/shared/Header/Header';
import Sidebar from '../../Components/shared/Sidebar/Sidebar';
import styles from './Finance.scss';
import withPopup from '../../HOC/withPopup';
// import Login from '../../Components/Main/Login/Login';
// import SingUp from '../../Components/Main/SingUp/SingUp';

const Finance = () => (
  <button
    type="button"
    onClick={() => {
      openPopup({
        PopupContentComponent: Login,
      });
    }}
  >
    open popup
  </button>
  // <>
  //   <Header />
  //   <div className={styles.contentWrapper}>
  //     <Sidebar />
  //     <Layout />
  //   </div>
  // </>
);

export default withPopup(Finance);
