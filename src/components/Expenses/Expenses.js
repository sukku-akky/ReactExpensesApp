import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';



const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState("2023")
    const changeFilterHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);

    }

    const filteredExpenses=props.expenses.filter((expense)=>{
        const date=new Date(expense.date);
        return date.getFullYear().toString()===filteredYear;
    })
    return (
        <Card className='expenses'>
            <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={changeFilterHandler}
            />
            {filteredExpenses.map((expense)=>{
                return (
                    <ExpenseItem
                      key={expense.id}
                      date={expense.date}
                      title={expense.title}
                      price={expense.price}
                    ></ExpenseItem>
                )
            })}

        </Card>
    )

}

export default Expenses;