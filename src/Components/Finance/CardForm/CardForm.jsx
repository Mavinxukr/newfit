import React, { useEffect } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { useDispatch } from 'react-redux';
import { createTextMask } from 'redux-form-input-masks';
import PropTypes from 'prop-types';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import { deleteCard, createCard, updateCard } from '../../../actions/userCard';
import { nameCardValidation, cardNumberValidation } from '../../../validates';
import styles from './CardForm.scss';

const CardForm = ({
  handleSubmit, initialize, userCard: { name = '', card_number: cardNumber = '', id = 0 }, setIsOpenCardForm,
}) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const func = name ? updateCard : createCard;
    dispatch(func({ ...values, card_number: +values.card_number }, id));
    setIsOpenCardForm(false);
  };

  useEffect(() => {
    initialize({ card_number: String(cardNumber), name });
  }, []);

  const cardMask = createTextMask({
    pattern: '9999 9999 9999 9999',
    guide: false,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <div className={styles.inputsWrapper}>
        <Field
          name="card_number"
          type="text"
          viewType="finance"
          placeholder="0000 0000 0000 0000"
          classNameWrapper={styles.inputWrapper}
          component={ReduxInputWrapper}
          validate={cardNumberValidation}
          {...cardMask} /*eslint-disable-line*/
        />
        <Field
          name="name"
          type="text"
          viewType="finance"
          placeholder="Имя на карте"
          classNameWrapper={styles.inputWrapper}
          component={ReduxInputWrapper}
          validate={nameCardValidation}
        />
      </div>
      <button
        type="submit"
        className={styles.buttonSubmit}
      >
        {name && 'Редактировать' || 'Добавить'}
      </button>
      {name && (
        <button
          type="button"
          className={styles.buttonSubmit}
          onClick={() => dispatch(deleteCard(id))}
        >
          Удалить
        </button>
      )}
    </Form>
  );
};

CardForm.propTypes = {
  handleSubmit: PropTypes.func,
  initialize: PropTypes.func,
  userCard: PropTypes.shape({
    name: PropTypes.string,
    card_number: PropTypes.number,
    id: PropTypes.number,
  }),
  setIsOpenCardForm: PropTypes.func,
};

export default reduxForm({
  form: 'card',
})(CardForm);
