export const calcTotalPrice = (items) => {
  return items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
};
