import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form';
import { AUTH_STATUSES } from '../../../constans';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import FacebookButton from '../../../UI-Kit/FacebookButton/FacebookButton';
import GoogleButton from '../../../UI-Kit/GoogleButton/GoogleButton';
import Button from '../../../UI-Kit/Button/Button';
import styles from './EntryForm.scss';

const EntryForm = ({
  handleSubmit,
  submitting,
  invalid,
  dirty,
  setAuthStatus,
  dispatch,
}) => {
  const onSubmit = (values) => {
    console.log(values);
    dispatch(setAuthStatus(AUTH_STATUSES.signUp));
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Добро пожаловать</h2>
      <p className={styles.text}>Войдите или Создайте аккаунт</p>
      <div className={styles.buttons}>
        <FacebookButton responseCallback={() => dispatch(setAuthStatus(AUTH_STATUSES.signUpViaFacebook))} />
        <GoogleButton
          onSuccess={() => dispatch(setAuthStatus(AUTH_STATUSES.signUpViaGoogle))}
          onFailure={(response) => console.log(response)}
        />
      </div>
      <Field
        name="email"
        type="email"
        viewType="entry"
        placeholder="name@company.com"
        classNameWrapper={styles.inputWrapper}
        component={ReduxInputWrapper}
      />
      <Button
        viewType={(invalid || submitting || !dirty) && 'white' || 'green'}
        type="submit"
        classNameWrapper={styles.buttonWrapper}
      >
        Продолжить
      </Button>
    </Form>
  );
};

EntryForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  dirty: PropTypes.bool,
  setAuthStatus: PropTypes.func,
  dispatch: PropTypes.func,
};

export default reduxForm({
  form: 'entryForm',
})(EntryForm);
