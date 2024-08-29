import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList=(props)=>{

    if(props.items.length===0){
        return <h2 className='expenses-list__fallback'>No Expenses found</h2>
    }

    return(
        <ul className='expenses-list'>
            {props.items.map((item)=>{
                return(
                    <ExpenseItem
                    key={item.id}
                    date={item.date}
                    title={item.title}
                    price={item.price}
                   />
                )
            })}

        </ul>

    )

} 

export default ExpensesList;