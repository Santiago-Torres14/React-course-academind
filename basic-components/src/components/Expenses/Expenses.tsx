import {ExpenseItem} from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import {ExpensesFilter} from "./ExpensesFilter";
import React, {useState} from "react";
import {ExpenseData} from "../../utils/Interfaces";
import {ExpensesList} from "./ExpensesList";
import {ExpensesChart} from "./ExpensesChart";

export function Expenses(props: {
    expenses: ExpenseData []
}): JSX.Element {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter((value) => value.date.getFullYear() === Number(filteredYear))

    return <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList  expenses={filteredExpenses}/>
    </Card>;
}