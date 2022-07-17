export interface ExpenseData {
    id?: string;
    title: string;
    amount: number;
    date: Date;
}

export interface ExpenseFunctionForm {
    onSaveExpenseData: (enteredExpenseData: ExpenseData) => void;
    onActive?: (isActive: boolean) => void;
}

export interface DataPoint {
    id: number;
    value: number;
    label: string;
}

export interface DataPoints {
    dataPoints: DataPoint[];
}
