export const calcTotalPrice = (items) => {
  if (items) {
    return items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
  }
  return 0;
  
};
