import React from 'react';
import PropTypes from 'prop-types';
import { FacebookLogin } from 'react-facebook-login-component';
import GoogleLogin from 'react-google-login';
import { Field, reduxForm, Form } from 'redux-form';
import { AUTH_STATUSES } from '../../../constans';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
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
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Добро пожаловать</h2>
      <p className={styles.text}>Войдите или Создайте аккаунт</p>
      <div className={styles.buttons}>
        <FacebookLogin
          socialId="1083453692003561"
          language="en_US"
          scope="public_profile,email"
          responseHandler={() => {
            dispatch(
              setAuthStatus(AUTH_STATUSES.signUpViaFacebook),
            );
          }}
          fields="id,email,name"
          version="v2.5"
          className={styles.facebookButton}
          buttonText="Facebook"
        />
        <GoogleLogin
          clientId="892807808817-0v44irg3g2b16vdbt4m7usn5g3uprhmj.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className={styles.googleButton}
              type="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Google
            </button>
          )}
          buttonText="Login"
          onSuccess={() => {
            dispatch(
              setAuthStatus(AUTH_STATUSES.signUpViaGoogle),
            );
          }}
          onFailure={(response) => console.log(response)}
          cookiePolicy="single_host_origin"
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
