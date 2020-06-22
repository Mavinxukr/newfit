import React, { useState } from 'react';
import Popup from '../UI-Kit/Popup/Popup';
import FormLayout from '../Components/Main/FormLayout/FormLayout';

const withPopup = (Component, { isOpenByDefault = false } = {}) => (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(isOpenByDefault);
  const [popupContent, setPopupContent] = useState(null);

  const closePopup = () => setIsOpenPopup(false);
  const openPopup = ({ PopupContentComponent }) => {
    setIsOpenPopup(true);
    setPopupContent(<PopupContentComponent closePopup={closePopup} />);
  };

  return (
    <>
      <Component {...props} openPopup={openPopup} />  {/*eslint-disable-line*/}
      {isOpenPopup && (
        <Popup closePopup={closePopup}>
          {popupContent && popupContent || <FormLayout />}
        </Popup>
      )}
    </>
  );
};

export default withPopup;
