import ExpenseItem from './components/ExpenseItem';

function App() {
    const expenses = [
        {
            id: 'e1',
            date: new Date(2022, 2, 17),
            title: 'Car Insurance',
            amount: 349.50
        },
        {
            id: 'e2',
            date: new Date(2022, 2, 18),
            title: 'New TV',
            amount: 500.50
        },
        {
            id: 'e3',
            date: new Date(2022, 2, 20),
            title: 'Groceries',
            amount: 85.78
        },
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem title={expenses[0].title}
                         date={expenses[0].date}
                         amount={expenses[0].amount}
            ></ExpenseItem>
            <ExpenseItem title={expenses[1].title}
                         date={expenses[1].date}
                         amount={expenses[1].amount}
            ></ExpenseItem>
            <ExpenseItem title={expenses[2].title}
                         date={expenses[2].date}
                         amount={expenses[2].amount}
            ></ExpenseItem>
        </div>
    );
}

export default App;
