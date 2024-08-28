import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=()=>{
    const initialData={
        enteredTitle:"",
        enteredAmount:"",
        enteredDate:""
    };

    const [userInput,setUserInput]=useState(initialData);

    

    function titleChangeHandler(event){
        setUserInput({
            ...userInput,
            enteredTitle:event.target.value
        });

    };

    function amountChangeHandler(event){
        setUserInput({
            ...userInput,
            enteredAmount:event.target.value
        })
    };

    function dateChangeHandler(event){
        setUserInput({
            ...userInput,
            enteredDate:event.target.value
        })
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Title</label>
                    <input type="text" id='title' onClick={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='amount'>Amount</label>
                    <input type="number" id='amount' onClick={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='date'>Date</label>
                    <input type="date" id='date' min="2023-01-01" max="3034-12-31"onClick={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;