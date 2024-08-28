import React from "react";
import "./ExpenseItem.css";

const ExpenseItem=()=>{
    return (
        <div className="expense-item">
            <div>15 August 2023</div>
            <div className="expense-item__description">
                <h2>Books</h2>
            </div>
            <div className="expense-item__price">$10</div>
            <div className="expense-item__location">
                <h2>Delhi</h2>
            </div>

        </div>
    )
}

export default ExpenseItem;