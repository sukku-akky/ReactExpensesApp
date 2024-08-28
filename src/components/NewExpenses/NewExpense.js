import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{

    const saveExpenseData=(enteredData)=>{
        const expenseData={...enteredData,id:Math.random().toString()};
        props.recievedExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData}></ExpenseForm>
        </div>
    )
}

export default NewExpense;