import React, { useState } from "react";
import { expenses } from "../../App";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css'
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

function Expenses() {
  const [selectedYear , setselectedYear] = useState('2020');
  function filterChangeHandler(selectedYear){
    console.log("Expenses.js");
    setselectedYear(selectedYear);
  }
  return (
    <>
      <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler} />
        {expenses.map((expense, i) => (
          <ExpenseItem key={i} {...expense} />
        ))}
      </Card>
    </>
  );
}

export default Expenses;
