import {useState} from 'react';
import styles from './ListInput.module.css';

const ListInput = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(true);
    const titleChangeHandler = (e) => {
        if (e.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredTitle(e.target.value);
    };

    const ageChangeHandler = (e) => {
        if (e.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredAge(Number(e.target.value));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        let errorMessage = '';

        if (enteredAge <= 0 || typeof enteredAge != 'number') {
            setIsValid(false);
            errorMessage = 'Must be positive number';
            return errorMessage;
        }

        if (enteredTitle.trim().length === 0 || typeof enteredTitle != 'string') {
            setIsValid(false);
            errorMessage = 'Must be correct name';
            return errorMessage;
        }

        const data = {
            text: enteredTitle, age: enteredAge, errorMessage,
        };

        props.onSaveData(data);
        setEnteredTitle('');
        setEnteredAge('');
    };


    return (<form onSubmit={submitHandler}>
            <input className={!isValid ? styles.invalid : undefined} value={enteredTitle} onChange={titleChangeHandler}
                   type="text" maxLength="100" placeholder="Enter name"/>
            <input className={!isValid ? styles.invalid : undefined} value={enteredAge} onChange={ageChangeHandler}
                   type="number" placeholder="Enter age"/>
            <button className={styles.button}>Submit</button>
        </form>);
};

export default ListInput;