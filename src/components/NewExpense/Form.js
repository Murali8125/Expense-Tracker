import React,{useState} from "react";

import "./ExpenseForm.css"

const Form=(props)=>{

    const [enteredtitle,setTitle]=useState('');
    const[enteredamount,setAmount]=useState('');
    const[entereddate,setDate]=useState('');

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredtitle,
            amount: +enteredamount,
            date:new Date(entereddate),
         
        }
        // console.log(expenseData)
        props.onFormData(expenseData);
        setAmount('');
        setTitle('');
        setDate('');

    };
    
    // const[userInput,newInput]=useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // })
    const titleChange=(event)=>{
        setTitle(event.target.value);
        // // newInput({
        // //     ...userInput,
        // //     title:event.target.value
        // // })
        // newInput((prevInput)=>{
        //     return {...prevInput,title:event.target.value}
        // })

    }
    const amountChange=(event)=>{
        setAmount(event.target.value);
        // // newInput({
        // //     ...userInput,
        // //     amount:event.target.value
        // // })
        // newInput((prevInput)=>{
        //     return {...prevInput,amount:event.target.value}
        // })

    }
    const dateChange=(event)=>{
        setDate(event.target.value);
        // // newInput({
        // // ...userInput,
        // // date:event.target.value
        // // })
        // newInput((prevInput)=>{
        //     return {...prevInput,date:event.target.value}
        // })

    }
    return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" value={enteredtitle} onChange={titleChange}/>
        </div>
        <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredamount } onChange={amountChange}/>
        </div>
        <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={entereddate} onChange={dateChange}  />
        </div> 
    </div>

    <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expenses</button>    
    </div>

    </form>
}
export default Form;