import NewExpenses from './components/NewExpenses';

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
            <NewExpenses items={expenses}/>
        </div>
    );
}

export default App;
