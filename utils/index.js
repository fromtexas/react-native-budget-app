export const counts = arr => {
  let incomes = 0;
  let costs = 0;
  let profit = 0;
  let percent = 0;

  arr.forEach(item => {
    if (item.or) {
      incomes += parseInt(item.$);
    } else {
      costs += parseInt(item.$);
    }
  });

  profit = incomes - costs;
  percent = Math.round((costs / incomes) * 100);

  return {
    incomes,
    costs,
    profit,
    percent: percent >= 0 ? percent : 0
  };
};
