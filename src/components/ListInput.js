import {useState} from 'react';
import styles from './ListInput.css';

const ListInput = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(true);
    const titleChangeHandler = (e) => {
        if(e.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredTitle(e.target.value);
    };

    const ageChangeHandler = (e) => {
        if(e.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredAge(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            text: enteredTitle,
            age: enteredAge,
        };

        if(enteredTitle.trim().length === 0 || enteredAge.trim().length) {
            setIsValid(false);
            return;
        }

        props.onSaveData(data);
        setEnteredTitle('');
        setEnteredAge('');
    };


    return (
        <form onSubmit={submitHandler}>
            <input value={enteredTitle} onChange={titleChangeHandler}
                   type="text" placeholder="Enter name"/>
            <input value={enteredAge} onChange={ageChangeHandler}
                   type="text" placeholder="Enter age"/>
            <button>Submit</button>
        </form>
    );
};

export default ListInput;