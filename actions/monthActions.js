import {
  ADD_MONTH,
  ADD_NEW_LINE_IN_BUDGET,
  REMOVE_MONTH_BUDGET_ITEM,
  REMOVE_MONTH
} from "./types";

export const addMonth = (date, id) => ({
  type: ADD_MONTH,
  date,
  id
});

export const addNewLineinMonthBudget = (id, payload) => ({
  type: ADD_NEW_LINE_IN_BUDGET,
  id,
  payload
});

export const removeMonthBudgetItem = (id, itemId) => ({
  type: REMOVE_MONTH_BUDGET_ITEM,
  id,
  itemId
});

export const removeMonth = id => ({
  type: REMOVE_MONTH,
  id
});
