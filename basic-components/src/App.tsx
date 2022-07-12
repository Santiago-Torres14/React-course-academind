import React from 'react'
import './App.css'
import {ExpenseItem} from "./components/ExpenseItem";

function App(): JSX.Element {
    const expenses = [
        {
            id: 'e1',
            title: 'toiler paper',
            amount: Math.floor(Math.random() * 100),
            date: new Date().toDateString()
        },
        {
            id: 'e2',
            title: 'Car insurance',
            amount: Math.floor(Math.random() * 100),
            date: new Date().toDateString()
        },
        {
            id: 'e3',
            title: 'variety',
            amount: Math.floor(Math.random() * 100),
            date: new Date().toDateString()
        }
    ]

    return (
        <div className="App">
            <p>this is also visible</p>
            <ExpenseItem expenseAmount={expenses[0].amount} expenseDate={expenses[0].date}
                         expenseTitle={expenses[0].title}/>
        </div>
    );
}

export default App
