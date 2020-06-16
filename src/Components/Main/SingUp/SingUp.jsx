import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import InputFormik from '../../../InputFormik/InputFormik';
import Popup from '../../../Popup/Popup';
import Button from '../../../Button/Button';
import IconArrowBack from '../../../../../public/svg/BackArrow.svg';
import styles from './SingUp.scss';
import Registration from '../Registration/Registration';
import { api } from '../../../../service/api';

const SingUp = ({ setStatus, email, status }) => (
  <Popup classNameWrapper={styles.singUpPopup}>
    <Button
      classNameWrapper={styles.bntBack}
      type="button"
      onClick={() => setStatus('entry')}
    >
      <IconArrowBack />
    </Button>
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
    <Formik
      initialValues={{ email: email || '', name: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('e-mail не валиден')
          .required('Вы не ввели e-mail'),
        name: Yup.string()
          .required('Введите имя'),
        password: Yup.string()
          .min(8, 'Мин 8 символов')
          .required('Вы не ввели пароль'),
      })}
      onSubmit={(values) => api.login('register', values)}
    >
      {(formik) => (
        <form className={styles.singUpForm} onSubmit={formik.handleSubmit}>
          <InputFormik
            classNameWrapper={styles.formikWrapper}
            formikProps={{
              ...formik,
              name: 'email',
              label: 'Ваш e-mail',
              viewType: 'entry',
              classNameWrapper: styles.inputWrapper,
            }}
          />
          <InputFormik
            classNameWrapper={styles.formikWrapper}
            formikProps={{
              ...formik,
              name: 'name',
              label: 'Имя и Фамилия',
              viewType: 'entry',
              placeholder: 'Ethan Pierce',
              classNameWrapper: styles.inputWrapper,
            }}
          />
          {(status !== 'registerViaFacebook' && status !== 'registerViaGoogle') && (
            <InputFormik
              classNameWrapper={styles.formikWrapper}
              formikProps={{
                ...formik,
                name: 'password',
                label: 'Создайте пароль',
                viewType: 'entry',
                placeholder: '*****',
                classNameWrapper: styles.inputWrapper,
              }}
            />
          )}
          <Button
            classNameWrapper={styles.singUpSubmit}
            viewType="formButton"
            type="submit"
            active={formik.dirty && formik.isValid}
          >
            Создать аккаунт
          </Button>
        </form>
      )}
    </Formik>
  </Popup>
);

Registration.propTypes = {
  setStatus: PropTypes.func,
  email: PropTypes.string,
  status: PropTypes.string,
};

export default SingUp;
