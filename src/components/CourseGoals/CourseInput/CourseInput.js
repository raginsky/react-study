import React, {useState} from 'react';
import './CourseInput.css';

const CourseInput = props => {
    [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            title: enteredTitle;
        }
        props.onAddData(data);
        setEnteredTitle('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <button>Add Goal</button>
        </form>
    );
};

export default CourseInput;