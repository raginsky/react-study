import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <section className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </section>
    );
}

export default ExpenseItem;