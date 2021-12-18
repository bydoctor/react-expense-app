import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    //const [title,setTitle]=useState(props.title); // ilk eleman o anki eleman . 2.cisi onu düzenleyen func.

    const clickHandler = () => {
        // setTitle('Updated!')
        //console.log(title)
    }

    return (
        <li>
            <Card className={"expense-item"}>
                <ExpenseDate date={props.date}/>
                <div className={"expense-item__description"}>
                    <h2>{props.title}</h2>
                    <div className={"expense-item__price"}>${props.amount}</div>
                    <button onClick={clickHandler}>Change Title</button>
                </div>

            </Card>
        </li>
    )
}

export default ExpenseItem;