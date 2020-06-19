import React, { useState } from 'react';
import Popup from '../UI-Kit/Popup/Popup';
import FormLayout from '../Components/Main/FormLayout/FormLayout';

const withPopup = (Component, { isOpenByDefault = false } = {}) => (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(isOpenByDefault);

  const closePopup = () => setIsOpenPopup(false);
  const openPopup = () => setIsOpenPopup(true);

  return (
    <>
      <Component {...props} openPopup={openPopup} />  {/*eslint-disable-line*/}
      {isOpenPopup && (
        <Popup closePopup={closePopup}>
          <FormLayout />
        </Popup>
      )}
    </>
  );
};

export default withPopup;
