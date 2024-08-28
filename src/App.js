
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";


function App() {
  const initialExpenses = [
    { id: "1", date: new Date(2023, 7, 15),location:"Bangalore", title: "Insurance", price: 100 },
    { id: "2", date: new Date(2023, 3, 25), location:"Delhi",title: "Book", price: 10 },
    { id: "3", date: new Date(2023, 10, 11), location:"Hyderabad",title: "Pen", price: 1 },
    { id: "4", date: new Date(2023, 1, 14), location:"Mumbai",title: "Laptop", price: 200 },
  ];

  const [expenses,setExpense]=useState(initialExpenses);



  const addExpenseHandler=(expense)=>{
    setExpense((prevState)=>{
      return [expense,...prevState];
    })

  }

  return (
    <div>
      <NewExpense recievedExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>

    </div>

    
  );
}

export default App;
