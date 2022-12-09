
// import ExpenseItems from "./components/Expenses/ExpenseItem";

import { useState } from "react";
import Expenses from "./components/Expenses/expenses";


import Newexpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses,setExpenses]=useState(initial_expenses);
  console.log(expenses);
  const Newone=(newexpense)=>{
   
    setExpenses((prevexpense)=>{
      
      return [newexpense,...prevexpense];
      
    })
   
  }
  return (
    <div>
      
      <Newexpense onNewExpense={Newone} />
    
       <Expenses items={expenses} />
    </div>
  );
}

export default App;
