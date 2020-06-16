import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputFormik from '../../../InputFormik/InputFormik';
import Popup from '../../../Popup/Popup';
import Button from '../../../Button/Button';
import IconArrowBack from '../../../../../public/svg/BackArrow.svg';
import styles from './Login.scss';
import { api } from '../../../../service/api';

const Login = () => (
  <Popup classNameWrapper={styles.loginPopup}>
    <Button classNameWrapper={styles.bntBack} type="button">
      <IconArrowBack />
    </Button>
    <h2 className={styles.loginTitle}>С возвращением</h2>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('e-mail не валиден')
          .required('Вы не ввели e-mail'),
        password: Yup.string()
          .required('Вы не ввели пароль'),
      })}
      onSubmit={(values) => api.login('login', values)}
    >
      {(formik) => (
        <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
          <InputFormik
            classNameWrapper={styles.formikWrapper}
            formikProps={{
              ...formik,
              name: 'email',
              label: 'Ваш e-mail',
              type: 'text',
              viewType: 'entry',
              classNameWrapper: styles.inputWrapper,
            }}
          />
          <InputFormik
            classNameWrapper={styles.formikWrapper}
            formikProps={{
              ...formik,
              name: 'password',
              label: 'Пароль',
              type: 'password',
              placeholder: '*****',
              viewType: 'entry',
              classNameWrapper: styles.inputWrapper,
            }}
          />
          <p className={styles.forgotPassword}>
            <a className={styles.forgotLink} href="/">
              Забыли пароль?
            </a>
          </p>
          <Button
            classNameWrapper={styles.loginSubmit}
            viewType="formButton"
            type="submit"
            active={formik.dirty && formik.isValid}
          >
            Войти в аккаунт
          </Button>
        </form>
      )}
    </Formik>
  </Popup>
);

export default Login;
