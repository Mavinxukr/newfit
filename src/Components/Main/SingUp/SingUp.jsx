import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import Button from '../../../UI-Kit/Button/Button';
import IconArrowBack from '../../../static/svg/BackArrow.svg';
import styles from './SingUp.scss';

const SingUp = ({
  setStatus, status, handleSubmit, submitting, invalid, dirty,
}) => (
  <form className={styles.singUpForm} onSubmit={handleSubmit}>
    <h2 className={styles.singUpTitle}>Заполните поля</h2>
    {status === 'registerViaFacebook' && (
    <div className={styles.facebookBLock}>
      <p className={styles.facebookTitle}>Facebook</p>
      <p className={styles.username}>@ethpierce</p>
    </div>
    ) || status === 'registerViaGoogle' && (
    <div className={styles.googleBLock}>
      <p className={styles.googleTitle}>Google</p>
      <p className={styles.username}>@ethpierce</p>
    </div>
    )}
    <button
      className={styles.bntBack}
      type="button"
      onClick={() => setStatus('entry')}
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
    {(status !== 'registerViaFacebook' && status !== 'registerViaGoogle') && (
      <Field
        name="password"
        type="password"
        viewType="entry"
        label="Создайте пароль"
        placeholder="*****"
        classNameWrapper={styles.formikWrapper}
        classNameWrapperForInput={styles.inputWrapper}
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
  setStatus: PropTypes.func,
  status: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  dirty: PropTypes.bool,
};

export default reduxForm({
  form: 'signIpForm',
})(SingUp);
