import React from "react";
import "./ExpenseItem.css";

const ExpenseItem=(props)=>{
    const months=['january','febrauary','march','april','may','june','july','august','september','october','november','december'];
    const month=months[props.date.getMonth()];
    const year=props.date.getFullYear();
    const day=props.date.getDate();

    
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
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