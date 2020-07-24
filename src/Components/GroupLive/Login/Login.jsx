import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import Button from '../../../UI-Kit/Button/Button';
import IconArrowBack from '../../../static/svg/BackArrow.svg';
import { AUTH_STATUSES } from '../../../constans';
import { getUser } from '../../../actions/auth';
import { emailValidation, passwordValidation } from '../../../validates';
import styles from './Login.scss';

const Login = ({
  handleSubmit, submitting, invalid, dispatch, setAuthStatus, initialize,
}) => {
  const defaultEmail = useSelector((state) => state.form?.entryForm?.values?.email);

  useEffect(() => {
    initialize({ email: defaultEmail });
  }, []);

  const onSubmit = (values) => {
    dispatch(getUser(values, true));
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
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
        validate={emailValidation}
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
        validate={passwordValidation}
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
        viewType={(invalid || submitting) && 'grey' || 'green'}
        type="submit"
      >
        Войти в аккаунт
      </Button>
    </form>
  );
};
Login.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  dispatch: PropTypes.bool,
  setAuthStatus: PropTypes.func,
  initialize: PropTypes.func,
};

export default reduxForm({
  form: 'loginForm',
})(Login);
