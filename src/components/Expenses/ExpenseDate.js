import './ExpenseDate.css';
import React from "react";

const months=['january','febrauary','march','april','may','june','july','august','september','october','november','december'];

const ExpenseDate=(props)=>{
    const month=months[props.date.getMonth()];
    const year=props.date.getFullYear();
    const day=props.date.getDate();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )


}

export default ExpenseDate;