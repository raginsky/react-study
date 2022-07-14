import React, {useState} from 'react';
import List from './components/List';
import NewItem from './components/NewItem';
import './App.css';

const App = () => {
    const [items, setItems] = useState([]);

    const saveData = (item) => {
        setItems(prevData => {
            return [item, ...prevData];
        });
    };

    let content = (
        <ul><li><p>Sorry, no fields found.</p></li></ul>
    );

    if (items.length > 0) {
        content = <List items={items}/>;
    }

    return (
        <section className="main">
            <div>
                <NewItem onAddItem={saveData}/>
                {content}
            </div>
        </section>
    );
};

export default App;