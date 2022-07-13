import {ExpenseItem} from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";

export function Expenses(props: {
    expenses: { date: Date; amount: number; id: string; title: string } []
    }) : JSX.Element {
    return <Card className="expenses">
        <ExpenseItem expenseAmount={props.expenses[0].amount} expenseDate={props.expenses[0].date}
                     expenseTitle={props.expenses[0].title}/>
        <ExpenseItem expenseAmount={props.expenses[1].amount} expenseDate={props.expenses[1].date}
                     expenseTitle={props.expenses[1].title}/>
        <ExpenseItem expenseAmount={props.expenses[2].amount} expenseDate={props.expenses[2].date}
                     expenseTitle={props.expenses[2].title}/>
    </Card>;
}