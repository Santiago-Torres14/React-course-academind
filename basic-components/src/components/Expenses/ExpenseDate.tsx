import React from "react";
import "./ExpenseDate.css"

interface expenseDateProp {
    date: Date
}

export const ExpenseDate: React.FC<expenseDateProp> = ({date}) => {
    const month = date.toLocaleString('en-US', {month: 'long'})
    const day = date.toLocaleString('en-US', {day: '2-digit'})
    const year = date.toLocaleString('en-US', {year: 'numeric'})

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}