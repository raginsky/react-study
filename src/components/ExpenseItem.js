import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <section className="expense-item">
            <ExpenseDate date={props.date}/>
        </section>
    );
}

export default ExpenseItem;