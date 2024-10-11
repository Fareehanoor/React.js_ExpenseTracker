import React from "react";
import { expenses } from "../../App";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css'
import Card from "../Card/Card";

function Expenses() {
  return (
    <>
      <Card className="expenses">
        {expenses.map((expense, i) => (
          <ExpenseItem key={i} {...expense} />
        ))}
      </Card>
    </>
  );
}

export default Expenses;
