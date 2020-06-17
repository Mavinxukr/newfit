import React from 'react';
// import styles from './Main.module.scss';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Finance from '../../Components/Finance/Layout/Layout';
// import EntryForm from '../../Components/Main/EntryForm/EntryForm';
// import Login from '../../Components/Main/Login/Login';
// import SingUp from '../../Components/Main/SingUp/SingUp';
// import withPopup from '../../HOC/withPopup';

const Main = () => (
  <>
    <Header />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Finance />
    </div>
  </>
  // <button
  //   type="button"
  //   onClick={() => {
  //     openPopup({
  //       PopupContentComponent: EntryForm,
  //     });
  //   }}
  // >open popup
  // </button>
);

export default Main;
