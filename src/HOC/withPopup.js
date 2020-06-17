import React, { useState } from 'react';
import Popup from '../UI-Kit/Popup/Popup';

const withPopup = (Component, { isOpenByDefault = false } = {}) => (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(isOpenByDefault);
  const [popupContent, setPopupContent] = useState(isOpenByDefault);

  const closePopup = () => setIsOpenPopup(false);
  const openPopup = ({ PopupContentComponent, ...propsPopup }) => {
    setPopupContent(<PopupContentComponent {...propsPopup} closePopup={closePopup} />);  {/*eslint-disable-line*/}
    setIsOpenPopup(true);
  };

  return (
    <>
      <Component {...props} openPopup={openPopup} />  {/*eslint-disable-line*/}
      {isOpenPopup && (
        <Popup closePopup={closePopup}>
          {popupContent}
        </Popup>
      )}
    </>
  );
};

export default withPopup;
