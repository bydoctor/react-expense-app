import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'New TV', amount: 450.45, date: new Date(2021, 5, 13)},
    {id: 'e2', title: 'Car Insurance', amount: 278.45, date: new Date(2021, 9, 18)},
    {id: 'e3', title: 'New Desk', amount: 150.45, date: new Date(2019, 9, 13)},
]

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses)=>{
            return [expense, ...prevExpenses]
        })
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>

    );
}

export default App;
