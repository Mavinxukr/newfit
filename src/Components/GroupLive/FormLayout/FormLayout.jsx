import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { AUTH_STATUSES } from '../../../constans';
import { setAuthStatus } from '../../../actions/auth';
import EntryForm from '../EntryForm/EntryForm';
import Login from '../Login/Login';
import Reset from '../Reset/Reset';
import SingUp from '../SingUp/SingUp';

const FORM_COMPONENTS = {
  [AUTH_STATUSES.entry]: EntryForm,
  [AUTH_STATUSES.login]: Login,
  [AUTH_STATUSES.signUp]: SingUp,
  [AUTH_STATUSES.signUpViaFacebook]: SingUp,
  [AUTH_STATUSES.signUpViaGoogle]: SingUp,
  [AUTH_STATUSES.reset]: Reset,
};

const FormLayout = ({ closePopup }) => {
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const FormComponent = FORM_COMPONENTS[status];

  return (
    <FormComponent
      dispatch={dispatch}
      status={status}
      setAuthStatus={setAuthStatus}
      closePopup={closePopup}
    />
  );
};

FormLayout.propTypes = {
  closePopup: PropTypes.func,
};

export default FormLayout;
