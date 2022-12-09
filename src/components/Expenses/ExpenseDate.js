import './ExpenseDate.css'

function expressDate(props){
    const month=props.date.toLocaleString('en-us',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.date.getFullYear();
    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div>{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
       

    );
}
export default expressDate;