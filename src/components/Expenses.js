import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';



const Expenses=(props)=>{
    return (
        <div className='expenses'>
            {props.expenses.map((expense)=>{
                return (
                    <ExpenseItem
                      key={expense.id}
                      date={expense.date}
                      title={expense.title}
                      price={expense.price}
                    ></ExpenseItem>
                )
            })}

        </div>
    )

}

export default Expenses;