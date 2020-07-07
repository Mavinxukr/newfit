import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import styles from './CardForm.scss';

const CardForm = ({
  handleSubmit, defaultNumber, defaultName, setIsOpenCardForm,
}) => {
  const onSubmit = () => setIsOpenCardForm(false);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <div className={styles.inputsWrapper}>
        <Field
          name="number"
          type="text"
          defaultValue={defaultNumber}
          viewType="finance"
          placeholder="0000 0000 0000 0000"
          classNameWrapper={styles.inputWrapper}
          component={ReduxInputWrapper}
        />
        <Field
          name="name"
          type="text"
          viewType="finance"
          defaultValue={defaultName}
          placeholder="Имя на карте"
          classNameWrapper={styles.inputWrapper}
          component={ReduxInputWrapper}
        />
      </div>
      <button
        type="submit"
        className={styles.buttonSubmit}
      >
        Добавить
      </button>
    </Form>
  );
};

CardForm.propTypes = {
  handleSubmit: PropTypes.func,
  setIsOpenCardForm: PropTypes.func,
  defaultNumber: PropTypes.string,
  defaultName: PropTypes.string,
};

export default reduxForm({
  form: 'card',
})(CardForm);
