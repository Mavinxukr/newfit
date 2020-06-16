import React from 'react';
// import styles from './Main.module.scss';
import EntryForm from '../../Components/Main/EntryForm/EntryForm';
import withPopup from '../../HOC/withPopup';

const Main = ({ openPopup }) => (
  <button
    type="button"
    onClick={() => {
      openPopup({
        PopupContentComponent: EntryForm,
      });
    }}
  >open popup
  </button>
);

export default withPopup(Main);
