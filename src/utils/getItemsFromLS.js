import { calcTotalPrice } from './calcTotalPrice';

export const getItemsFromLs = () => {
  const json = localStorage.getItem('cart');
  const items = JSON.parse(json);
  const totalPrice = calcTotalPrice(items);
  return {
    items,
    totalPrice,
  };
};
