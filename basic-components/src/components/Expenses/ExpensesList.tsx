import "./ExpensesList.css";
import React from "react";
import {ExpenseItem} from "./ExpenseItem";
import {ExpenseData} from "../../utils/Interfaces";

interface Props {
    expenses: ExpenseData[]
}

export const ExpensesList: React.FC<Props> = (props) => {

    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return (<ul className="expenses-list">
            {props.expenses
                .map(
                    (value) =>
                    <ExpenseItem
                        key={value.id}
                        amount={value.amount}
                        date={value.date}
                        title={value.title}/>
                )
            }
        </ul>
    );
}