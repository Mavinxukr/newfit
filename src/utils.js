export const isEmptyObject = (obj) => !Object.keys(obj).length;

export const sliceCard = (card) => {
  const cardStr = String(card);
  return cardStr.slice(cardStr.length - 4);
};

export const copyText = (selector) => {
  const input = document.querySelector(selector);
  input.select();
  document.execCommand('copy');
};
