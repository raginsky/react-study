import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../Filter/ExpensesFilter';

const Expenses = (props) => {
    const saveExpenseFilterHandler = (expenseFilterValue) => {
        const expenseFilterData = expenseFilterValue;
        console.log(expenseFilterData);
    };
    return (
        <div className="expenses">
            <ExpensesFilter onSelectExpenseFilter={saveExpenseFilterHandler}/>
            <Card>
                <ExpenseItem title={props.items[0].title}
                             date={props.items[0].date}
                             amount={props.items[0].amount}
                />
                <ExpenseItem title={props.items[1].title}
                             date={props.items[1].date}
                             amount={props.items[1].amount}
                />
                <ExpenseItem title={props.items[2].title}
                             date={props.items[2].date}
                             amount={props.items[2].amount}
                />
            </Card>
        </div>
    );
};

export default Expenses;