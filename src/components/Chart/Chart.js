import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar"


const Chart =(props)=>{
  

  const expensesOnlyArray=props.chartExpenses.map((monthExpenses)=>{
    return monthExpenses.price;
  });

  const maxValue=Math.max(...expensesOnlyArray);

  const chartArray=[
    {expenseMonth:"jan",expensePrice:0},
    {expenseMonth:"feb",expensePrice:0},
    {exxpenseMonth:"mar",expensePrice:0},
    {expenseMonth:"apr",expensePrice:0},
    {expenseMonth:"may",expensePrice:0},
    {expenseMonth:"jun",expensePrice:0},
    {expenseMonth:"jul",expensePrice:0},
    {expenseMonth:"aug",expensePrice:0},
    {exxpenseMonth:"sep",expensePrice:0},
    {expenseMonth:"oct",expensePrice:0},
    {expenseMonth:"nov",expensePrice:0},
    {expenseMonth:"dec",expensePrice:0},
  ];

  for(let expense of props.chartExpenses){
    chartArray[expense.date.getMonth()].expensePrice+=expense.price;
  }

  return(
    <div className="chart">
      {chartArray.map((monthData)=>{
         return (
           <ChartBar
             key={monthData.expenseMonth}
             label={monthData.expenseMonth}
             value={monthData.expensePrice}
             max={maxValue}
           />
         )
                  
      })}

    </div>
  )
}

export default Chart;

