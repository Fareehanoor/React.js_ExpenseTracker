import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm({onSaveExpenseData}) {
    // const [enteredTitle , setEnteredTitle] = useState('');
    // const [enteredAmount , setEnteredAmount] = useState('');
    // const [enteredDate , setEnteredDate] = useState('');
     const [userInput , setUserInput] = useState({
        title : '' ,
        amount : '',
        date :'',
     });

    function titleChangeHandler(event){
        setUserInput((prevState)=>{
            return {...prevState , title : event.target.value}
        })
    }
    function amountChangeHandler(event){
        setUserInput((prevState)=>{
            return {...prevState , amount : event.target.value}
        })
    }
    function dateChangeHandler(event){
        setUserInput((prevState)=>{
            return {...prevState , date : event.target.value}
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        const expenseData = {
            title : userInput.title,
            amount : userInput.amount,
            date: userInput.date,
        };
        onSaveExpenseData(expenseData);
        setUserInput({
            title : '' ,
            amount : '',
            date :'',
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={userInput.title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.date}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm