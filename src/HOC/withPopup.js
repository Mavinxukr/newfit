import React, { useState } from 'react';
import Popup from '../UI-Kit/Popup/Popup';
import FormLayout from '../Components/GroupLive/FormLayout/FormLayout';

const withPopup = (Component, { isOpenByDefault = false } = {}) => (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(isOpenByDefault);
  const [popupContent, setPopupContent] = useState(null);

  const closePopup = () => setIsOpenPopup(false);
  const openPopup = (propsPopup) => {
    if (propsPopup) {
      const { PopupContentComponent, content } = propsPopup;
      setPopupContent(<PopupContentComponent content={content} closePopup={closePopup} />);
    }
    setIsOpenPopup(true);
  };

  return (
    <>
      <Component {...props} openPopup={openPopup} />  {/*eslint-disable-line*/}
      {isOpenPopup && (
        <Popup closePopup={closePopup} persistToOpenPopup={popupContent}>
          {popupContent && popupContent || <FormLayout />}
        </Popup>
      )}
    </>
  );
};

export default withPopup;
