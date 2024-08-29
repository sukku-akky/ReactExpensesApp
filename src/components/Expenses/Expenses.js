import React,{useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';



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
            <ExpensesChart forExpensesChart={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>


        </Card>
    )

}

export default Expenses;