import './ExpensesFilter.css';
import React from 'react';


const ExpensesFilter=(props)=>{
    const dropDownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    }



    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor='year-dropdown'>Filter by Year</label>
                <select
                id='year-dropdown'
                value={props.selected}
                onChange={dropDownChangeHandler}
                >
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>

            </div>
        </div>
    )

}

export default ExpensesFilter;