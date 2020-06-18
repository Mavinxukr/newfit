import React from 'react';
import { useSelector } from 'react-redux';
import { AUTH_STATUSES } from '../../../constans';
import EntryForm from '../EntryForm/EntryForm';
import Login from '../Login/Login';
import SingUp from '../SingUp/SingUp';

const FORM_COMPONENTS = {
  [AUTH_STATUSES.entry]: EntryForm,
  [AUTH_STATUSES.login]: Login,
  [AUTH_STATUSES.signUp]: SingUp,
  [AUTH_STATUSES.signUpViaFacebook]: SingUp,
  [AUTH_STATUSES.signUp]: SingUp,
};

const FormLayout = () => {
  const status = useSelector((state) => state.auth.status);

  const FormComponent = FORM_COMPONENTS[status];

  return <FormComponent />;
};

export default FormLayout;
