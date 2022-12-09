import react from "react";
import "./ExpenseList.css"
import ExpenseItems from "./ExpenseItem";
const Expenselist = (props) => {

    if (props.expense.length === 0) {
        return <h2 className="expenses-list__fallback">No items found</h2>
    }
    else {
        return <ul className="expenses-list">
            {
                props.expense.map((expense) =>
                    <ExpenseItems
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}>
                    </ExpenseItems>)
            }

        </ul>
    }

}
export default Expenselist;