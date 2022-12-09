import ExpenseItems from "./ExpenseItem";
import ExpensesFilter from "./NewFilter";
import ExpensesChart from "./ExpenseChart";
import { useState } from "react";
import "./expense.css";
import Card from "../UI/Card"
import Expenselist from "./ExpenseList";
function Expenses(props) {
  const [preyear, setyear] = useState("2020");
  console.log(props.items);
  const forYear = (yearwanted) => {


    setyear(yearwanted)

  }
  const filteredexpense = props.items.filter((eachexpense) => {
    return eachexpense.date.getFullYear().toString() === preyear;
  })

  return (

    <div>

      <Card className="expenses">
        <ExpensesFilter selected={preyear} onChangingYear={forYear} />
        <ExpensesChart expenses={filteredexpense}/>
        <Expenselist expense={filteredexpense} />
        
      </Card>
    </div>

  );
}

export default Expenses;