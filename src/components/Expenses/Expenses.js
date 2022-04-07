import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../Filter/ExpensesFilter';
import {useState} from 'react';

/** Controller component */
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
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