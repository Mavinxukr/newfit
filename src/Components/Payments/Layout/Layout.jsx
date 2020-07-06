import React from 'react';
import TemplateWrapper from '../../shared/TemplateWrapper/TemplateWrapper';
import PaymentCard from '../PaymentCard/PaymentCard';
import FAQ from '../../shared/FAQ/FAQ';
import styles from './Layout.scss';

const cards = [
  {
    id: 1,
    title: 'CrossFit тренировка для расслабления',
    amountParticipant: 3,
    date: 'Сегодня, 14:30',
    price: '₽ 1 700',
    currency: 'руб.',
    link: 'https://us04web.zoom.us/j/79060883756?pwd',
  },
  {
    id: 2,
    title: 'CrossFit тренировка для расслабления',
    amountParticipant: 3,
    price: '₽ 1 700',
    currency: 'руб.',
  },
  {
    id: 3,
    amountParticipant: 3,
    price: '₽ 1 700',
    currency: 'руб.',
    link: 'https://us04web.zoom.us/j/79060883756?pwd',
  },
];

const Layout = () => (
  <TemplateWrapper>
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {cards.map((item, index) => (
          <>
            {index % 2 === 0 && (
              <div className={styles.cardsWrapper}>
                <PaymentCard item={item} key={item.id} />
                {cards[index + 1] && (
                  <PaymentCard item={cards[index + 1]} key={cards[index + 1].id} />
                )}
              </div>
            )}
          </>
        ))}
      </div>
      <FAQ />
    </div>
  </TemplateWrapper>
);

export default Layout;
