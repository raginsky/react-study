import React, {useState} from 'react';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';

let i = 0;
const defaultData = [
    {id: `id_${i++}`, text: `This is ${i} example item`},
    {id: `id_${i++}`, text: `This is ${i} example item`},
];

const App = () => {
    const [courseGoals, setCourseGoals] = useState(defaultData);
    const addItemHandler = item => {
        setCourseGoals(prevItem => {
            return [item, ...prevItem];
        });
    };

    let content = (
        <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <CourseGoalList items={courseGoals}/>
        );
    }

    return (
        <div>
            <section id="goal-form">
                <CourseInput onAddItem={addItemHandler}/>
            </section>
            <section id="goals">
                {content}
            </section>
        </div>
    );
};

export default App;