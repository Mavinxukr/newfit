import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import Button from '../../../UI-Kit/Button/Button';
import { AUTH_STATUSES } from '../../../constans';
import { getUser } from '../../../actions/auth';
import { nameValidation, passwordValidation, emailValidation } from '../../../validates';
import IconArrowBack from '../../../static/svg/BackArrow.svg';
import styles from './SingUp.scss';

const SingUp = ({
  handleSubmit,
  submitting,
  invalid,
  setAuthStatus,
  dispatch,
  status,
  initialize,
  closePopup,
}) => {
  const email = useSelector((state) => state.form?.entryForm?.values?.email);
  const name = useSelector((state) => state.form?.entryForm?.values?.name);

  useEffect(() => {
    initialize({ email, name });
  }, []);

  const onSubmit = (values) => dispatch(getUser(values, closePopup));

  return (
    <form className={styles.singUpForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.singUpTitle}>Заполните поля</h2>
      {status === AUTH_STATUSES.signUpViaFacebook && (
        <div className={styles.facebookBLock}>
          <p className={styles.facebookTitle}>Facebook</p>
          <p className={styles.username}>@ethpierce</p>
        </div>
      ) || status === AUTH_STATUSES.signUpViaGoogle && (
        <div className={styles.googleBLock}>
          <p className={styles.googleTitle}>Google</p>
          <p className={styles.username}>{name || '@username'}</p>
        </div>
      )}
      <button
        className={styles.bntBack}
        type="button"
        onClick={() => {
          dispatch(setAuthStatus(AUTH_STATUSES.entry));
        }}
      >
        <IconArrowBack />
      </button>
      <Field
        name="email"
        type="email"
        viewType="entry"
        label="Ваш e-mail"
        placeholder="name@company.com"
        classNameWrapper={styles.formikWrapper}
        validate={emailValidation}
        classNameWrapperForInput={styles.inputWrapper}
        component={ReduxInputWrapper}
      />
      <Field
        name="name"
        type="text"
        viewType="entry"
        label="Имя и Фамилия"
        placeholder="Ethan Pierce"
        validate={nameValidation}
        classNameWrapper={styles.formikWrapper}
        classNameWrapperForInput={styles.inputWrapper}
        component={ReduxInputWrapper}
      />
      {(status !== AUTH_STATUSES.signUpViaGoogle && status !== AUTH_STATUSES.signUpViaFacebook) && (
        <Field
          name="password"
          type="password"
          viewType="entry"
          label="Создайте пароль"
          placeholder="*****"
          validate={passwordValidation}
          classNameWrapper={styles.formikWrapper}
          classNameWrapperForInput={styles.inputWrapper}
          component={ReduxInputWrapper}
        />
      )}
      <Button
        classNameWrapper={styles.singUpSubmit}
        viewType={(invalid || submitting) && 'grey' || 'green'}
        type="submit"
      >
        Создать аккаунт
      </Button>
    </form>
  );
};

SingUp.propTypes = {
  setAuthStatus: PropTypes.func,
  status: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  dispatch: PropTypes.func,
  initialize: PropTypes.func,
  closePopup: PropTypes.func,
};

export default reduxForm({
  form: 'signUpForm',
})(SingUp);
