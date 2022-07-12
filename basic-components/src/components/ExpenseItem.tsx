import React from "react";
import "./ExpenseItem.css"

interface expenseItemProp {
    expenseDate: string
    expenseTitle: string
    expenseAmount: number
}

export const ExpenseItem: React.FC<expenseItemProp> = ({expenseDate, expenseTitle, expenseAmount}) => {

    return (<div className="expense-item">
        <div>{expenseDate}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    </div>);
}