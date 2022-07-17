import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    /** individual State approach */
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /** single State approach */
        // const [userInput, setUserInput] = useState({
        //     enteredTitle: '',
        //     enteredAmount: '',
        //     enteredDate: '',
        // });

    const titleChangeHandler = (event) => {
            /** individual State approach call  */
            setEnteredTitle(event.target.value);
            /** single State approach, data will be replaced for all without spread operator,
             * can cause problems in specific cases - since outdated previous state
             * */
            // setUserInput({
            //     ...userInput,
            //     enteredTitle: event.target.value,
            // });
            /** can guarantee that last state will be latest state snapshot */
            // setUserInput((prevState) => {
            //     return {...prevState, enteredTitle: event.target.value};
            // });
        };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} type="text"
                           onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={enteredAmount} type="number" min="0.01" step="0.01"
                           onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredDate} type="date" min="2019-01-01" max="2048-12-31"
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;