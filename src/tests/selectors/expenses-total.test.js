import { getExpensesTotal } from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("Should print 114195", () => {
  expect(getExpensesTotal(expenses)).toBe(114195);
});

test("Should print 0", () => {
  expect(getExpensesTotal([])).toBe(0);
});

test("Should print 195", () => {
  expect(getExpensesTotal([expenses[0]])).toBe(195);
});
