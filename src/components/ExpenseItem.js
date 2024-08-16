import React from 'react'
import "./Expense.css"
const ExpenseItem = () => {
    let dt = new Date()
    let title = "Bike"
    let amount = 230000

  return (
    <div className="expenseitem">
        <div>
            <p>{dt.toISOString()}</p>
        </div>
        <div><p>{title}</p></div>
        <div>{amount}</div>
    </div>
  )
}

export default ExpenseItem
