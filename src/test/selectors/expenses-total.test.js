import moment from 'moment';
import totalExpenses from '../../selectors/expenses-total';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should return 0 if no expenses', () => {
  const total = totalExpenses();
  expect(total).toBe(0);
});

test('should return 0 if no expenses', () => {
  const total = totalExpenses([]);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = totalExpenses([ expenses[0] ]);
  expect(total).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const total = totalExpenses(expenses);
  expect(total).toBe(114195);
});

