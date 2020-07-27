import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import Button from '../../../UI-Kit/Button/Button';
import { notify } from '../../../actions/notification';
import IconExit from '../../../static/svg/close.svg';
import styles from './LinkPopup.scss';

const LinkPopup = ({ handleSubmit, closePopup }) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(notify(<p className={styles.notifyContent}>Готово! Сумма с комиссией -5% будет отправлено в течении 1-2 рабочих дней</p>, 5000));
    closePopup();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={closePopup}
      >
        <IconExit />
      </button>
      <h2 className={styles.title}>Добавить ссылку</h2>
      <p className={styles.desc}>Ссылка на эфир в Zoom / Skype …</p>
      <Field
        name="link"
        viewType="entry"
        defaultValue="https://us04web.zoom.us/j/79060883756?pwd"
        classNameWrapper={styles.inputWrapper}
        component={ReduxInputWrapper}
      />
      <Button
        classNameWrapper={styles.buttonSubmit}
        viewType="green"
        type="submit"
      >
        Сохранить
      </Button>
    </Form>
  );
};

LinkPopup.propTypes = {
  handleSubmit: PropTypes.func,
  closePopup: PropTypes.func,
};

export default reduxForm({
  form: 'formLink',
})(LinkPopup);
