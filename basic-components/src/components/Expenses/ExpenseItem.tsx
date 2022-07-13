import React from "react";
import "./ExpenseItem.css"
import {ExpenseDate} from "./ExpenseDate";
import Card from "../UI/Card";

interface expenseItemProp {
    expenseDate: Date
    expenseTitle: string
    expenseAmount: number
}

export const ExpenseItem: React.FC<expenseItemProp> = ({expenseDate, expenseTitle, expenseAmount}) => {

    return (<Card className="expense-item">
        <ExpenseDate date={expenseDate}/>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    </Card>);
}