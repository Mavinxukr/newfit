import React from 'react';
import PropsTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AUTH_STATUSES } from '../../../constans';
import apiService from '../../../apiServices';
import { notify } from '../../../actions/notification';
import Button from '../../../UI-Kit/Button/Button';
import IconArrowBack from '../../../static/svg/BackArrow.svg';
import styles from './Reset.scss';

const Reset = ({ dispatch, setAuthStatus, closePopup }) => {
  const email = useSelector((state) => state.form?.entryForm?.values?.email);

  const callbackReset = async () => {
    const response = await apiService.reset({ email });
    const { isSuccess } = response;
    if (isSuccess) {
      dispatch(notify(
        <p className={styles.notifyText}>Мы отправили письмо на вашу почту ({email}), подтвердите его</p>, 10000,
      ));
    }

    closePopup();
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.bntBack}
        type="button"
        onClick={() => {
          dispatch(setAuthStatus(AUTH_STATUSES.login));
        }}
      >
        <IconArrowBack />
      </button>
      <h2>Восстановить пароль</h2>
      <p className={styles.desc}>
        Мы отправим новый пароль на e-mail для входа,
        после отправки старый пароль будет удален.
        Изменить вы сможете его в Профиле
      </p>
      <button
        className={styles.buttonCancel}
        type="button"
        onClick={() => {
          dispatch(setAuthStatus(AUTH_STATUSES.login));
        }}
      >
        Отменить
      </button>
      <Button
        type="button"
        viewType="green"
        classNameWrapper={styles.buttonUpdate}
        onClick={callbackReset}
      >
        Отправить новый пароль
      </Button>
    </div>
  );
};

Reset.propTypes = {
  dispatch: PropsTypes.func,
  setAuthStatus: PropsTypes.func,
  closePopup: PropsTypes.func,
};

export default Reset;
