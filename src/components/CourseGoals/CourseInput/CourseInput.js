import React from 'react';
import './CourseInputcss';

const CourseInput = props => {
    return (
        <form>
            <div className="form-control">
                <label>Couse Goal</label>
                <input type="text"/>
            </div>
            <button>Add Goal</button>
        </form>
    );
};

export default CourseInput;