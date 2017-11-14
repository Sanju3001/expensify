import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';


const ExpenseSummary = (props) => (

  <div>
      {props.length === 0 && <p>There are no expenses to display for the selected range</p>}
      {props.length === 1 && <p>Viewing 1 expenses totalling {props.total}</p>}
      {props.length > 1 && <p>Viewing {props.length} expenses totalling {props.total}</p>}
  </div>

);

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  return {
    total: numeral(totalExpenses(visibleExpenses) / 100).format('$0,0.00'),
    length: visibleExpenses.length
  };
};


export default connect(mapStateToProps)(ExpenseSummary);