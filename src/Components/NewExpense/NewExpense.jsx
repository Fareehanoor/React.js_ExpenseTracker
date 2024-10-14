import React from 'react'
import './NewExpense.css';
import ExpenseForm from '../Form/ExpenseForm';

function NewExpense({addexpenseHandler}) {

  function onSaveExpenseData(enteredExpenseData){
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addexpenseHandler(expenseData);
  }
  return (
    <div className='new-expense'>
       <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
  )
}

export default NewExpense