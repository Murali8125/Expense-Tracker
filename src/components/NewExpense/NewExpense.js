import Form from "./Form";
import { useState } from "react";
import "./NewExpense.css"
const Newexpense=(props)=>{
    const [isediting,setediting]=useState(false);
    const afterNewexpense=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
       
        // console.log(expenseData)
        props.onNewExpense(expenseData);

    }
    const afterclickingrender= ()=>{
            setediting(true);
    }
    const stopediting=()=>{
        setediting(false);
    }
    return <div className="new-expense">
        {!isediting && <button onClick={afterclickingrender}>New Expense</button>}
        {isediting && <Form onFormData={afterNewexpense} onCancel={stopediting}/>}
    </div>

}
export default Newexpense; 