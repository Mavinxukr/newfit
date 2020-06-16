import React from 'react';
import PropTypes from 'prop-types';
import { FacebookLogin } from 'react-facebook-login-component';
import GoogleLogin from 'react-google-login';
import { Field, reduxForm } from 'redux-form';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import Button from '../../../UI-Kit/Button/Button';
import styles from './EntryForm.scss';

const EntryForm = ({
  setStatus, handleSubmit, submitting, invalid,
}) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Добро пожаловать</h2>
      <p className={styles.text}>Войдите или Создайте аккаунт</p>
      <div className={styles.buttons}>
        <FacebookLogin
          socialId="1083453692003561"
          language="en_US"
          scope="public_profile,email"
          responseHandler={() => setStatus('registerViaFacebook')}
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
            setStatus('registerViaGoogle');
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
        component={ReduxInputWrapper}
      />
      <Button
        viewType="formButton"
        active={submitting && invalid}
        type="submit"
        classNameWrapper={styles.buttonWrapper}
      >
        Продолжить
      </Button>
    </form>
  );
};

EntryForm.propTypes = {
  setStatus: PropTypes.func,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
};

export default reduxForm({
  form: 'entryForm',
})(EntryForm);
