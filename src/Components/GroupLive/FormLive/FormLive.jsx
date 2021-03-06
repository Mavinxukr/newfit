import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';
import { useSelector } from 'react-redux';
// import cx from 'classnames';
import PropTypes from 'prop-types';
import DatePicker from '../../../UI-Kit/DatePicker/DatePicker';
import Checkbox from '../../../UI-Kit/Checkbox/Checkbox';
import ReduxInputWrapper from '../../../UI-Kit/ReduxInputWrapper/ReduxInputWrapper';
import Button from '../../../UI-Kit/Button/Button';
import withPopup from '../../../HOC/withPopup';
import LinkPopup from '../LinkPopup/LinkPopup';
import IconClose from '../../../static/svg/close.svg';
import styles from './FormLive.scss';

const FormLive = ({
  handleSubmit, setIndexForOpenEditForm, openPopup,
}) => {
  const onSubmit = (valuesForm) => {
    console.log(valuesForm);
  };

  const formLive = useSelector((state) => state.form.formLive);

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <button
        onClick={() => {
          setIndexForOpenEditForm(0);
        }}
        aria-label="icon"
        type="button"
        className={styles.buttonClose}
      ><IconClose />
      </button>
      <div className={styles.inputsWrapper}>
        <div className={styles.dateWrapper}>
          <h5 className={styles.titleDate}>Дата проведения</h5>
          <DatePicker />
        </div>
        <div className={styles.pricingWrapper}>
          <h5 className={styles.titleDate}>Стоимость</h5>
          <div className={styles.priceFields}>
            <Field
              name="discount"
              id="discount"
              type="checkbox"
              component={(input) => <Checkbox {...input} viewType="simple">Скидка</Checkbox>} /*eslint-disable-line*/
            />
            <Field
              name="price"
              viewType="newLive"
              classNameWrapper={styles.inputWrapper}
              defaultValue="00,00"
              component={ReduxInputWrapper}
            />
            <Field name="favoriteColor" component="select" className={styles.selectCurrency}>
              <option value="#ff0000">Грн</option>
              <option value="#00ff00">Usd</option>
              <option value="#0000ff">Eur</option>
            </Field>
            {formLive?.values?.discount && (
              <div className={styles.discount}>
                <Field
                  name="price"
                  viewType="newLive"
                  classNameWrapper={styles.inputWrapper}
                  defaultValue="00,00"
                  component={({ input }) => (
                    <input
                      placeholder="10"
                      value={input.value}
                      onChange={input.onChange}
                      className={styles.discountInput}
                      type="text"
                    />
                  )}
                />
                <span className={styles.inputMinus}>-</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.addOption}>
        {/* <Field */}
        {/*  name="pricing" */}
        {/*  id="pricing" */}
        {/*  type="checkbox" */}
        {/*  classNameWrapper={styles.checkboxWrapper} */}
        {/*  component={(input) => ( */}
        {/*    <Checkbox {...input} viewType="slider" label> /!*eslint-disable-line*!/ */}
        {/*      <p className={styles.checkboxContent}> */}
        {/*        Продолжить продавать участие списывая по */}
        {/*        <span className={cx(styles.checkboxContentGreen, { */}
        {/*          [styles.checkboxContentGray]: formLive?.values?.pricing, */}
        {/*        })} */}
        {/*        > 0,10$/Участник{' '} */}
        {/*        </span> */}
        {/*        с доходов? */}
        {/*      </p> */}
        {/*    </Checkbox> */}
        {/*  )} */}
        {/* /> */}
        <button
          type="button"
          className={styles.buttonEdit}
          onClick={() => openPopup({
            PopupContentComponent: LinkPopup,
          })}
        >
          Добавить ссылку на эфир (Zoom, Skype … )
        </button>
        <Button
          type="submit"
          viewType="smallGreen"
          classNameWrapper={styles.submitWrapper}
        >
          Сохранить
        </Button>
      </div>
    </Form>
  );
};

FormLive.propTypes = {
  handleSubmit: PropTypes.func,
  setIndexForOpenEditForm: PropTypes.func,
  openPopup: PropTypes.func,
};

export default withPopup(reduxForm({
  form: 'formLive',
})(FormLive));
