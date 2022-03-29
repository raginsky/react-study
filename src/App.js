import NewExpenses from './components/Expenses/NewExpenses';

// function App
const App = () => {
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

    /**
     * An old approach
     * [type, props, child]
     * [html-element, object that configures previous element (sets attr), component between opening and closing tags]
     *
     return React.createElement('div', {},
     React.createElement('h2', {}, 'Lets get started!'),
     React.createElement(Expenses, {items: expenses})
     );
     */

    return (
        <div>
            <h2>Let's get started!</h2>
            <NewExpenses items={expenses}/>
        </div>
    );
}

export default App;
