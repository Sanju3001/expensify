// import moment from 'moment';

// Get total expenses


export default ((expenses) => {
  if (expenses === undefined || expenses.length === 0) {
    return 0;
  } else {
      return expenses.map((expense) => {
        return expense.amount;
      }).reduce((total, amount) => {
          return total + amount;
      });
    }
});


