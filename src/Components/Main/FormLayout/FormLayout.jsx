import React from 'react';
import { useSelector } from 'react-redux';
import { AUTH_STATUSES } from '../../../constans';
import EntryForm from '../EntryForm/EntryForm';
import Login from '../Login/Login';

const FORM_COMPONENTS = {
  [AUTH_STATUSES.entry]: EntryForm,
}

const FormLayout = () => {
  const status = useSelector(state => state.auth.status);

  const FormComponent = FORM_COMPONENTS[status];

  return <FormComponent />;
};
