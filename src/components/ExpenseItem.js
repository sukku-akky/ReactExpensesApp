import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem=(props)=>{
    


    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">{props.price}</div>
            <div className="expense-item__location">
                <h2>{props.location}</h2>
            </div>

        </div>
    )
}

export default ExpenseItem;