export const emailValidation = (value) => {
  if (!value) {
    return 'Вы не ввели e-mail';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Нужный формат text@text.domen';
  }

  return undefined;
};

export const nameValidation = (value) => {
  if (!value) {
    return 'Это нужно для ваших клиентов';
  }

  if (value.length < 3) {
    return 'имя должно содержать минимум 3 символа';
  }

  return undefined;
};

export const passwordValidation = (value) => {
  if (!value) {
    return 'Вы не ввели пароль';
  }

  if (value.length < 8) {
    return 'пароль должен содержать минимум 8 символов';
  }

  if (!/(^([a-zA-Z0-9]+)(\d+)?$)/u.test(value)) {
    return 'Буквы все должны быть латиницей (ABC) Без пробелов, или используйте « _ »';
  }

  return undefined;
};

export const cardNumberValidation = (value) => {
  if (!value) {
    return 'Введите карту';
  }

  if (value.length < 16) {
    return 'Введите полный номер карты';
  }
};

export const nameCardValidation = (value) => {
  if (!value) {
    return 'Это нужно для отправки платежа';
  }

  return undefined;
};
