import React from 'react';
import withPopup from '../../HOC/withPopup';

const Main = ({ openPopup }) => (
  <button type="button" onClick={() => openPopup({})}>open form</button>
);

export default withPopup(Main);
