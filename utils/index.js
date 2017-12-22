export const counts = (arr) => {
    let incomes = 0;
    let costs = 0;
    let profit = 0;

    arr.forEach(item => {
        if(item.or){
            incomes += parseInt(item.$);
        } else {
            costs += parseInt(item.$);
        }
    });

    profit = incomes - costs; 

    return {
        incomes,
        costs,
        profit 
    };
};