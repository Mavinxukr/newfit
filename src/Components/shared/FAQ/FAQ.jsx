import React from 'react';
import Accordion from '../../../UI-Kit/Accordion/Accordion';
import styles from './FAQ.scss';

const questions = [
  {
    id: 1,
    title: 'Что если я случайно Выйду / Потеряю ссылку?',
    desc: 'Мы уже создали для вас аккаунт (те данные, которые вы ввели при оплате), тут <a href="/">История оплат</a> здесь все ваши оплаты, если вы потеряете ссылку, она всегда будет тут пока тренер не удалит занятие. К аккаунту имеет доступ только вы он для того, чтобы в случае если вы потеряли ссылку — могли ее найти',
  },
  {
    id: 2,
    title: 'Как зайти в аккаунт на других устройствах?',
    desc: 'Мы уже создали для вас аккаунт (те данные, которые вы ввели при оплате), тут <a href="/">История оплат</a> здесь все ваши оплаты, если вы потеряете ссылку, она всегда будет тут пока тренер не удалит занятие. К аккаунту имеет доступ только вы он для того, чтобы в случае если вы потеряли ссылку — могли ее найти',
  },
];

const FAQ = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Вопросы и Ответы</h1>
    <div className={styles.accordions}>
      {questions.map((item, index) => (
        <Accordion key={item.id} title={item.title} viewType="faq" isDefaultActive={index === 0}>
          <div className={styles.accordionDesc} dangerouslySetInnerHTML={{ __html: item.desc }} />
        </Accordion>
      ))}
    </div>
  </div>
);

export default FAQ;
