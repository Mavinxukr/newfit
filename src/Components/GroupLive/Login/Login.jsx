import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import cx from 'classnames';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import Button from '../../../UI-Kit/Button/Button';
import IconArrowBack from '../../../static/svg/BackArrow.svg';
import { AUTH_STATUSES } from '../../../constans';
import styles from './Login.scss';

const Login = ({
  handleSubmit, submitting, invalid, dirty, dispatch, setAuthStatus,
}) => (
  <form className={styles.loginForm} onSubmit={handleSubmit}>
    <h2 className={styles.loginTitle}>С возвращением</h2>
    <button
      className={styles.bntBack}
      type="button"
      onClick={() => dispatch(setAuthStatus(AUTH_STATUSES.entry))}
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
      name="password"
      type="password"
      viewType="entry"
      label="Пароль"
      placeholder="*****"
      classNameWrapper={styles.formikWrapper}
      classNameWrapperForInput={cx(styles.inputWrapper, styles.inputPassword)}
      component={ReduxInputWrapper}
    />
    <p className={styles.forgotPassword}>
      <button
        className={styles.forgotButton}
        type="button"
        onClick={() => dispatch(setAuthStatus(AUTH_STATUSES.reset))}
      >
        Забыли пароль?
      </button>
    </p>
    <Button
      classNameWrapper={styles.loginSubmit}
      viewType={(invalid || submitting || !dirty) && 'grey' || 'green'}
      type="submit"
    >
      Войти в аккаунт
    </Button>
  </form>
);

Login.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  dirty: PropTypes.bool,
  dispatch: PropTypes.bool,
  setAuthStatus: PropTypes.bool,
};

export default reduxForm({
  form: 'loginForm',
})(Login);
