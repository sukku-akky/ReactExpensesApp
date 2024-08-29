import Chart from '../Chart/Chart';
import React from 'react';

const ExpensesChart=(props)=>{
    return(
        <div>
            <Chart chartExpenses={props.forExpensesChart}/>
        </div>
    )
}

export default ExpensesChart;