import ExpenseDates from './ExpenseDate';
import React,{useState} from "react";
import './ExpenseItem.css';
import Card from "../UI/Card";

function ExpenseItems(props){
    // const [title,setTitle]=useState(props.title);
    // console.log(title);
    // const clickHandler=()=>{
       
    //     setTitle("updated");
    // }

    return (
        <Card className='expense-item'>
            <ExpenseDates date={props.date}></ExpenseDates>
            <div className='expense-item__description'>
                <h2 >{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
          
            {/* <button onClick={clickHandler}>Change Title</button> */}
           
        </Card>
    );
}
export default ExpenseItems