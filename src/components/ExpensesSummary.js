import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal, allExpenses}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    const hiddenExpenses = allExpenses - expenseCount
    const hiddenExpenseWord = hiddenExpenses === 1 ? 'expense' : 'expenses'
    return  (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h1>
                <h3>You have <span>{hiddenExpenses}</span> hidden <span>{hiddenExpenseWord}</span></h3>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        allExpenses: state.expenses.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary)