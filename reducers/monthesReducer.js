import {
  ADD_MONTH,
  ADD_NEW_LINE_IN_BUDGET,
  REMOVE_MONTH_BUDGET_ITEM,
  REMOVE_MONTH
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_MONTH:
      return [...state, { id: action.id, date: action.date, budget: [] }];
    case ADD_NEW_LINE_IN_BUDGET:
      const updated = state.map(item => {
        if (action.id !== item.id) {
          return item;
        } else {
          const budget = item.budget || [];
          return {
            ...item,
            budget: [...budget, action.payload]
          };
        }
      });
      return updated;
    case REMOVE_MONTH_BUDGET_ITEM:
      return state.map(item => {
        if (item.id !== action.id) {
          return item;
        } else {
          return {
            ...item,
            budget: item.budget.filter(item => item.id !== action.itemId)
          };
        }
      });
    case REMOVE_MONTH:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
