import React, { useEffect } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { useDispatch } from 'react-redux';
import { createTextMask } from 'redux-form-input-masks';
import PropTypes from 'prop-types';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import { deleteCard } from '../../../actions/userCard';
import { nameValidation } from '../../../validates';
import styles from './CardForm.scss';

const CardForm = ({
  handleSubmit, initialize, defaultName, defaultNumber,
}) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    initialize({ number: defaultNumber, name: defaultName });
  }, []);

  const cardMask = createTextMask({
    pattern: '9999 9999 9999 9999',
    guide: false,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <div className={styles.inputsWrapper}>
        <Field
          name="number"
          type="text"
          viewType="finance"
          placeholder="0000 0000 0000 0000"
          classNameWrapper={styles.inputWrapper}
          component={ReduxInputWrapper}
          {...cardMask} /*eslint-disable-line*/
        />
        <Field
          name="name"
          type="text"
          viewType="finance"
          placeholder="Имя на карте"
          classNameWrapper={styles.inputWrapper}
          component={ReduxInputWrapper}
          validate={nameValidation}
        />
      </div>
      <button
        type="submit"
        className={styles.buttonSubmit}
      >
        {defaultNumber && 'Редактировать' || 'Сохранить'}
      </button>
      {defaultNumber && (
        <button
          type="button"
          className={styles.buttonSubmit}
          onClick={() => dispatch(deleteCard())}
        >
          Удалить
        </button>
      )}
    </Form>
  );
};

CardForm.propTypes = {
  handleSubmit: PropTypes.func,
  setIsOpenCardForm: PropTypes.func,
  defaultNumber: PropTypes.string,
  defaultName: PropTypes.string,
  initialize: PropTypes.func,
};

export default reduxForm({
  form: 'card',
})(CardForm);
