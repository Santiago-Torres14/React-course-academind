import React, {useState} from "react";
import "./ExpenseForm.css"
import {ExpenseData, ExpenseFunctionForm} from "../../utils/Interfaces";


export const ExpenseForm: React.FC<ExpenseFunctionForm> = ({onSaveExpenseData, onActive}) => {

    const [enteredTitle, setEnteredTitle] = useState<string>("");
    const [enteredAmount, setEnteredAmount] = useState<string>("");
    const [enteredDate, setEnteredDate] = useState<string>("");

    const titleChangeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setEnteredTitle(event.currentTarget.value);
    };

    const amountChangeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setEnteredAmount(event.currentTarget.value);
    };

    const dateChangeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setEnteredDate(event.currentTarget.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const expenseData: ExpenseData = {
            amount: Number(enteredAmount),
            date: new Date(enteredDate),
            id: "",
            title: enteredTitle
        };

        onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredDate("");
        setEnteredAmount("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31"
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={() => onActive?.(false)} type="reset">Cancel</button>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}