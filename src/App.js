import {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
// function App

const exampleData = [
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

const App = () => {
    const [expenses, setExpenses] = useState(exampleData);
    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

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
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
};

export default App;
