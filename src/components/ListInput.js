import {useState} from 'react';

const ListInput = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            title: enteredTitle,
        };

        props.onSubmitForm(data);
        setEnteredTitle('');
    };


    return (
        <form onSubmit={submitHandler}>
            <input value={enteredTitle} onChange={titleChangeHandler} type="text"/>
            <button>Submit</button>
        </form>
    );
};

export default ListInput;