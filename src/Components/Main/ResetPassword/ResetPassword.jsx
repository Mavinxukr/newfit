import React from 'react';
import Popup from '../../../Popup/Popup';
import IconArrowBack from '../../../../../public/svg/BackArrow.svg';
import Button from '../../../Button/Button';
import styles from './ResetPassword.scss';

const ResetPassword = () => (
  <Popup classNameWrapper={styles.resetPopup}>
    <Button classNameWrapper={styles.bntBack} type="button">
      <IconArrowBack />
    </Button>
    <h2 className={styles.resetTitle}>Восстановить пароль</h2>
    <p className={styles.resetInfo}>Мы отправим новый пароль на e-mail для входа, после отправки старый пароль будет удален. Изменить вы сможете его в Профиле</p>
    <Button classNameWrapper={styles.cancelBtn} type="button">
      Отменить
    </Button>
    <Button classNameWrapper={styles.resetBtn} type="button" viewType="formButton">
      Отправить новый пароль
    </Button>
  </Popup>
);

export default ResetPassword;
