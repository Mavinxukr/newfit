import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Field, reduxForm } from 'redux-form';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import Button from '../../../UI-Kit/Button/Button';
import { AUTH_STATUSES } from '../../../constans';
import IconArrowBack from '../../../static/svg/BackArrow.svg';
import styles from './SingUp.scss';

const SingUp = ({
  handleSubmit,
  submitting,
  invalid,
  dirty,
  setAuthStatus,
  dispatch,
  status,
}) => (
  <form className={styles.singUpForm} onSubmit={handleSubmit}>
    <h2 className={styles.singUpTitle}>Заполните поля</h2>
    {status === AUTH_STATUSES.signUpViaFacebook && (
    <div className={styles.facebookBLock}>
      <p className={styles.facebookTitle}>Facebook</p>
      <p className={styles.username}>@ethpierce</p>
    </div>
    ) || status === AUTH_STATUSES.signUpViaGoogle && (
    <div className={styles.googleBLock}>
      <p className={styles.googleTitle}>Google</p>
      <p className={styles.username}>@ethpierce</p>
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
      classNameWrapperForInput={styles.inputWrapper}
      component={ReduxInputWrapper}
    />
    <Field
      name="name"
      type="text"
      viewType="entry"
      label="Имя и Фамилия"
      placeholder="Ethan Pierce"
      classNameWrapper={styles.formikWrapper}
      classNameWrapperForInput={styles.inputWrapper}
      component={ReduxInputWrapper}
    />
    {(status !== AUTH_STATUSES.signUpViaGoogle && status !== AUTH_STATUSES.signUpViaFacebook) && (
      <Field
        name="password"
        type="text"
        viewType="entry"
        label="Создайте пароль"
        placeholder="*****"
        classNameWrapper={styles.formikWrapper}
        classNameWrapperForInput={cx(styles.inputWrapper, styles.inputPassword)}
        component={ReduxInputWrapper}
      />
    )}
    <Button
      classNameWrapper={styles.singUpSubmit}
      viewType={(invalid || submitting || !dirty) && 'grey' || 'green'}
      type="submit"
    >
      Создать аккаунт
    </Button>
  </form>
);

SingUp.propTypes = {
  setAuthStatus: PropTypes.func,
  status: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  dirty: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default reduxForm({
  form: 'signIpForm',
})(SingUp);
