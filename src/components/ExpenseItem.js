import React from "react";
import "./ExpenseItem.css";

const ExpenseItem=()=>{

    const expenseDate=new Date(2023 ,3,22).toISOString();
    const expenseTitle="Books";
    const expensePrice=50;
    const expenseLocation="Bangalore";
    return (
        <div className="expense-item">
            <div>{expenseDate}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
            </div>
            <div className="expense-item__price">{expensePrice}</div>
            <div className="expense-item__location">
                <h2>{expenseLocation}</h2>
            </div>

        </div>
    )
}

export default ExpenseItem;