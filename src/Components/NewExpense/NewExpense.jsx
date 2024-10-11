import React from 'react'
import './NewExpense.css';
import ExpenseForm from '../Form/ExpenseForm';

function NewExpense() {
  return (
    <div className='new-expense'>
       <ExpenseForm />
    </div>
  )
}

export default NewExpense