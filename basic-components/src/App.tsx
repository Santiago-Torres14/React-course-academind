import React from 'react'
import './App.css'
import {Expenses} from "./components/Expenses/Expenses";

function App(): JSX.Element {
    const nDate = new Date();

    const expenses = [
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
            title: 'variety',
            amount: Math.floor(Math.random() * 100),
            date: nDate
        }
    ]

    return (
        <div className="App">
            <p>Expenses</p>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App
