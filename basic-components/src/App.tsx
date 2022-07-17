import React, {useState} from 'react'
import './App.css'
import {Expenses} from "./components/Expenses/Expenses";
import {NewExpense} from "./components/NewExpense/NewExpense";
import {ExpenseData} from "./utils/Interfaces";


const nDate = new Date();
const DUMMY_EXPENSES: ExpenseData[] = [
    {
        id: 'e1',
        title: 'toiler paper',
        amount: Math.floor(Math.random() * 100),
        date: nDate
    },
    {
        id: 'e2',
        title: 'Car insurance',
        amount: Math.floor(Math.random() * 100),
        date: nDate
    },
    {
        id: 'e3',
        title: 'other',
        amount: Math.floor(Math.random() * 100),
        date: nDate
    }
]

function App(): JSX.Element {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const saveExpenseDataHandler = (expenseData: ExpenseData) => {
        console.log(expenseData)
        setExpenses((prevState) => {
            return [expenseData, ...prevState];
        });
    };

    return (
        <div className="App">
            <NewExpense onSaveExpenseData={saveExpenseDataHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App
