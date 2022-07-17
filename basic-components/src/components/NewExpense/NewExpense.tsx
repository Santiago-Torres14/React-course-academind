import React, {useState} from "react";
import "./NewExpense.css"
import {ExpenseForm} from "./ExpenseForm";
import {ExpenseData, ExpenseFunctionForm} from "../../utils/Interfaces";

export const NewExpense: React.FC<ExpenseFunctionForm> = ({onSaveExpenseData}) => {

    const [isActive, setIsActive] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: "10"
        };
        setIsActive(false);
        onSaveExpenseData(expenseData);
    };

    const onActiveHandler = (isActive: boolean) => {
        setIsActive(isActive);
    }

    return (
        <div className="new-expense">
            { isActive ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onActive={onActiveHandler}/> :
                <button onClick={() => onActiveHandler(true)} >Add new expense</button>
            }
        </div>
    );
}