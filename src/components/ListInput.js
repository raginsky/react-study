import {useState} from 'react';

const ListInput = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };


    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            text: enteredTitle,
            age: enteredAge,
        };

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