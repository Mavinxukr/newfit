import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';
import PropTypes from 'prop-types';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import Button from '../../../UI-Kit/Button/Button';
import IconExit from '../../../static/svg/close.svg';
import styles from './LinkPopup.scss';

const LinkPopup = ({ handleSubmit, closePopup }) => {
  const onSubmit = () => closePopup();

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={closePopup}
      >
        <IconExit />
      </button>
      <h2>Добавить ссылку</h2>
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
