import React from 'react';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
    return (
        <div>
            <section id="goal-form">
                <CourseInput onAddData={onAddData} />
            </section>
            <section id="goals">
            </section>
        </div>
    );
};

export default App;